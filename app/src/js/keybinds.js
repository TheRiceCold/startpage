const binds = {
  search: {
    key: 'o',
    action: () => {
      console.log('Search')
      // searchRef.value.classList.add('active') 
      // inputRef.value.scrollIntoView()
      // setTimeout(() => inputRef.value.focus(), 100)
    }
  },

  // Keys used: ArrowKeys, Game Keys(WASD), Vim Keys (HJKL)
  navigation: {
    up: {
      key: ['ArrowUp', 'w', 'k'],
      action: () => {
        console.log('UP')
      }
    },
    down: {
      key: ['ArrowDown', 's', 'j'],
      action: () => {
        console.log('DOWN')
      }
    },
    left: {
      key: ['ArrowLeft', 'a', 'h'],
      action: () => {
        console.log('LEFT')
      }
    },
    right: {
      key: ['ArrowRight', 'd', 'l'],
      action: () => {
        console.log('RIGHT')
      }
    }
  }
}

function setKeybinds(e) {
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
