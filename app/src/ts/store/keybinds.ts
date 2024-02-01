import { map } from 'nanostores'
import { type TKeybinds } from '@ts/types'

export const $keybinds = map<TKeybinds>({
  search: { 
    default: { },
    newTab: { }
  }, // set at components/Search.vue

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
