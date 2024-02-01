import { atom } from 'nanostores'
import { type TSearchEngine } from '@ts/types'

export const $searchEngines = atom<TSearchEngine[]>([
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
])

export function addSearchEngine(searchEngine: TSearchEngine) {
  $searchEngines.set([...$searchEngines.get(), searchEngine])
}
