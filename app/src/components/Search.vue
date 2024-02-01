<script setup lang='ts'>
  import { ref, onMounted } from 'vue'
  import { handler } from '@handlers/search'
  import { $keybinds } from '@store/index'

  const isShown = ref<Boolean>(false)
  const inputRef = ref<null | HTMLInputElement>(null)
  const containerRef = ref<null | HTMLDivElement>(null)

  function showHandler() {
    isShown.value = !isShown.value
    const input = inputRef.value

    if (input !== null) {
      input.scrollIntoView()
      setTimeout(() => input.focus(), 100)
    }
  }

  onMounted(() => {
    $keybinds.setKey('search', {
      default: {
        key: 'o',
        action: showHandler,
      },
    })
  })
</script>

<template>
  <div 
    @keyup='handler'
    :class="{ show: isShown }"
    id='container' 
    ref='containerRef'
    class="
      flex 
      z-10 
      h-full 
      w-full 
      absolute 
      top-[-100%]
      items-center 
      justify-center">
    <div class="w-4/5 relative">
      <input 
        ref='inputRef'
        spellcheck='false' 
        placeholder='search' 
        class="
          w-full 
          p-[0.5em_0]
          border-none 
          outline-none 
          bg-transparent" />
    </div>
  </div>
</template>

<style>
  #container {
    transition: all .2s ease-in-out;
  }

  #container.show { top: 0; }

  input {
    letter-spacing: 1px;
    box-shadow: inset 0 -2px #737373;
    font: 500 22px 'Roboto', sans-serif;
  }

  input:focus {
    box-shadow: inset 0 -2px #d4be98;
  }
</style>
