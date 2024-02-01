import type { TSearchEngine } from '@ts/types'
import { $searchEngines } from '@store/index'

export const handler = (
  event: KeyboardEvent, 
  isNewTab: Boolean = false
) => {
  const target = event.target as HTMLInputElement
  const searchEngines: TSearchEngine[] | undefined = $searchEngines.value

  let args: string[] = target.value.split(' ')
  let prefix: string = args[0]
  let engine: TSearchEngine | undefined = searchEngines && searchEngines[0]

  if (event.key === 'Enter') {
    if (prefix.indexOf('/') === 0 && searchEngines !== undefined) {
      args = args.slice(1)
      engine = searchEngines.find(se => se.prefix === prefix.substring(1))
    }

    if (engine !== undefined) {
      let link = engine.link + encodeURI(args.join(' '))
      if (isNewTab)
        window.open(link, '_blank')

      window.location.href = link
    }
  }
}
