type TSearchEngine = {
  prefix: string
  name: string
  link: string
}

const searchEngines: TSearchEngine[] = [
  {
    prefix: 'g',
    name: 'Google',
    link: 'https://google.com/search?q=',
  },
  {
    prefix: 'r',
    name: 'Reddit',
    link: 'https://reddit.com/r/',
  },
  {
    prefix: 'y',
    name: 'Youtube',
    link: 'https://youtube.com/results?search_query=',
  },
  {
    prefix: 'p',
    name: 'Pinterest',
    link: 'https://www.pinterest.es/search/pins/?q=',
  },
  {
    prefix: 'gh',
    name: 'GitHub Repo',
    link: 'https://github.com/search?type=repositories&q=',
  },

  // Package Managers
  {
    prefix: 'np',
    name: 'Nix Packages',
    link: 'https://search.nixos.org/packages?channel=unstable&query=',
  },
  {
    prefix: 'npm',
    name: 'Node Packages',
    link: 'https://www.npmjs.com/search?q=',
  },
]

export const handler = ({ target, key }: { target: EventTarget, key: string }) => {
  let args: string = target.value.split(' ')
  let prefix: string = args[0]
  let engine: TSearchEngine | undefined = searchEngines[0]

  if (key === 'Enter') {
    if (prefix.indexOf('/') === 0) {
      args = args.slice(1)
      engine = searchEngines.find(se => se.prefix === prefix.substring(1))
    }

    if (engine !== undefined)
      window.location.href = engine.link + encodeURI(args.join(' '))
  }
}
