import type { 
  TKeybind, 
  TKeybindMap 
} from '@ts/types'
import { $keybinds } from '@store/index'

function setKeybinds(event: KeyboardEvent) {
  const binds: TKeybindMap | undefined = $keybinds.value

  const execKeybind = (bind: TKeybind)=> {
    const { key } = bind

    const runAction = (k: string) => {
      if (event.key === k) 
        bind.action()
    }

    if (Array.isArray(key)) 
      key.forEach(runAction) // Multiple keys
    else 
      runAction(key)
  }

  for (const b in binds) {
    const bind: TKeybindMap | TKeybind = binds[b]

    if ('key' in bind)
      execKeybind(bind as TKeybind)

    else for (const child in bind)
      execKeybind(bind[child] as TKeybind)
  }
}

document.body.onkeydown = setKeybinds
