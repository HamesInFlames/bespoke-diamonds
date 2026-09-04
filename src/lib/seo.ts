import { useEffect } from 'react'

interface Seo {
  title: string
  description?: string
}

const SUFFIX = ' | Bespoke Diamonds'

/** Per-route document title and description. */
export function useSeo({ title, description }: Seo) {
  useEffect(() => {
    document.title = title.includes('Bespoke Diamonds') ? title : `${title}${SUFFIX}`
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = 'description'
        document.head.appendChild(tag)
      }
      tag.content = description
    }
  }, [title, description])
}
