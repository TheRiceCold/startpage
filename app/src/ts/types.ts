export type TKeybinds = {
  [name: string]: {
    key: string | string[]
    action: () => void
  } | TKeybinds
}

export type TSearchEngine = {
  prefix: string
  name: string
  link: string
}
