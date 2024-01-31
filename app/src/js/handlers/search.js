const searchEngines = {
  r: ['https://reddit.com/r/', 'Reddit'],
  g: ['https://google.com/search?q=', 'Google'],
  y: ['https://youtube.com/results?search_query=', 'Youtube'],
  p: ['https://www.pinterest.es/search/pins/?q=', 'Pinterest'],
  gh: ["https://github.com/search?type=repositories&q=", "GitHub"],
  np: ['https://search.nixos.org/packages?channel=unstable&query=', 'Nix Packages'],
}

export function handler({ target, key }) {
  let args = target.value.split(' ')
  let prefix = args[0]
  let engine = searchEngines['g'][0]

  if (key === 'Enter') {
    if (prefix.indexOf('@') === 0) {
      args = args.slice(1)
      engine = searchEngines[prefix.substr(1)][0]
    }
    window.location = engine + encodeURI(args.join(' '))
  }
}
