import { atom } from 'nanostores'

export const keybinds = atom({
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
})
