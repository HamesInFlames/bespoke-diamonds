import re,sys,html,glob,os
for f in sorted(glob.glob('html/*.html')):
    s=open(f,encoding='utf-8').read()
    s=re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>','',s,flags=re.S)
    s=re.sub(r'<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*>',r' [IMG alt="\1" \2] ',s)
    s=re.sub(r'<a [^>]*href="([^"]*)"[^>]*>',r' [A \1] ',s)
    s=re.sub(r'<(h[1-6])[^>]*>',r'\n\n## ',s)
    s=re.sub(r'</(p|div|li|h[1-6]|section|tr)>','\n',s)
    s=re.sub(r'<[^>]+>',' ',s)
    s=html.unescape(s)
    s=re.sub(r'[ \t]+',' ',s); s=re.sub(r'\n\s*\n+','\n\n',s)
    out='text/'+os.path.basename(f).replace('.html','.txt')
    open(out,'w',encoding='utf-8').write(s.strip())
    print(out,len(s))
