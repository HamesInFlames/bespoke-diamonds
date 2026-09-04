import re,glob,os,html,urllib.request,json,collections
pages={}
for f in sorted(glob.glob('research/html/*.html')):
    name=os.path.basename(f)[:-5]; s=open(f,encoding='utf-8').read()
    for m in re.finditer(r'<img[^>]*>',s):
        tag=m.group(0)
        src=re.search(r'\ssrc="([^"]+)"',tag); alt=re.search(r'alt="([^"]*)"',tag)
        srcset=re.search(r'srcset="([^"]+)"',tag)
        if not src: continue
        url=src.group(1)
        # prefer largest srcset candidate
        if srcset:
            cands=[c.strip().split(' ') for c in srcset.group(1).split(',')]
            cands=[(int(c[1][:-1]) if len(c)>1 and c[1].endswith('w') else 0,c[0]) for c in cands]
            best=max(cands)[1]
            if best.startswith('http'): url=best
        if not url.startswith('http'): continue
        pages.setdefault(url,{'alt':html.unescape(alt.group(1)) if alt else '','pages':set()})['pages'].add(name)
    for m in re.finditer(r'background-image:\s*url\(&quot;?([^)&]+)',s):
        pages.setdefault(m.group(1),{'alt':'(background)','pages':set()})['pages'].add(name)
    for m in re.finditer(r'(https://cdn\.prod\.website-files\.com/[^"\' )]+\.(?:mp4|webm))',s):
        pages.setdefault(m.group(1),{'alt':'(video)','pages':set()})['pages'].add(name)
manifest=[]
for url,d in pages.items():
    fn=re.sub(r'^[0-9a-f]{24}_','',url.split('/')[-1])
    fn=re.sub(r'[^A-Za-z0-9._-]','_',fn)
    dest='assets/source/'+fn
    if os.path.exists(dest):
        base,ext=os.path.splitext(fn); i=2
        while os.path.exists(f'assets/source/{base}-{i}{ext}'): i+=1
        dest=f'assets/source/{base}-{i}{ext}'
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
        data=urllib.request.urlopen(req,timeout=30).read()
        open(dest,'wb').write(data); size=len(data)
    except Exception as e:
        size=-1; print('FAIL',url,e)
    manifest.append({'file':dest,'url':url,'alt':d['alt'],'pages':sorted(d['pages']),'bytes':size})
json.dump(manifest,open('assets/source/manifest.json','w'),indent=1)
print(len(manifest),'files;', sum(m['bytes'] for m in manifest if m['bytes']>0)//1024,'KB total')
c=collections.Counter(p for m in manifest for p in m['pages']); print(dict(c))
