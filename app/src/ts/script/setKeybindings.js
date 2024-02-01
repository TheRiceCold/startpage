import { $keybinds } from '@store/index'

function setKeybinds(e) {
  const binds = $keybinds.value

  const execKeybind = bind => {
    const { key } = bind

    const runAction = k => {
      if (e.key === k) 
        bind.action()
    }

    if (Array.isArray(key)) 
      key.forEach(runAction) // Multiple keys
    else 
      runAction(key)
  }

  for (const b in binds) {
    const bind = binds[b]

    if ('key' in bind)
      execKeybind(bind)

    else for (const child in bind)
      execKeybind(bind[child])
  }
}

document.body.onkeydown = setKeybinds
