export type TKeybind = {
  key: string | string[]
  action: () => void
}

export type TKeybindMap = {
  [name: string]: TKeybind | TKeybindMap
}

export type TSearchEngine = {
  prefix: string
  name: string
  link: string
}
