<script setup>
  import { ref, onMounted } from 'vue'
  import { handler } from '@handlers/search'
  import { $keybinds } from '@store/keybinds'

  const isShown = ref(false)
  const containerRef = ref(null)

  onMounted(() => {
    $keybinds.setKey('search', {
      key: 'o',
      action: () => {
        const input = containerRef.value.querySelector('input')
        isShown.value = !isShown.value
        input.scrollIntoView()
        setTimeout(() => input.focus(), 100)
      }
    })
  })
</script>

<template>
  <div 
    id='container' 
    ref='containerRef'
    @keyup='handler'
    :class="{ show: isShown }"
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
        spellcheck='false' 
        placeholder='search' 
        class="
          w-full 
          p-[0.5em_0]
          border-none 
          outline-none 
          bg-transparent" />
      <ul class="
        flex 
        p-0 
        left-0 
        list-none 
        top-[50px] 
        m-[1em 0 0 0]">
        <li class="m-[0_1em_0_0]" 
          v-for='(_, key) in searchEngines'>
          <p 
            class="cursor-default text-xs" 
            :title='searchEngines[key][1]'>
            @{{ key }}
          </p>
        </li>
      </ul>
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
