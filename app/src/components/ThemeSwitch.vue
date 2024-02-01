<template>
  <button class="
    fixed 
    p-3
    m-px
    z-10 
    top-4 
    right-8 
    bg-white
    rounded-full 
    cursor-pointer"
    ref='buttonRef'
  >
    <div class='clip fixed top-12 right-12 w-0 h-0 z-2 rounded-full' />
  </button>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'

  const buttonRef = ref<HTMLButtonElement | null>(null)
  const query = (q: string) => document.querySelector(q)

  function handleClick() {
    query('.clip').innerHTML = query('.container').outerHTML
    query('.clip .container').classList.toggle('dark')

    // Animation CSS defined in tailwind.config.js
    query('.clip').classList.add('animate-clip') 
    
    // Replace container with clip html
    setTimeout(() => {
      query('.container').outerHTML = query('.clip').innerHTML 
    }, 1000)
  }

  document.body.addEventListener('click', handleClick)
</script>

<style> 
  .container {
    color: var(--color);
    background: var(--background);
  }

  .container:not(.dark) {
    --color: #323133;
    --accent: #bf263c;
    --cardtext: #323133;
    --cardtext2: #3c3b3d;
    --background: #a9b665;
    --cardshadow: rgba(0, 0, 0, 0.1);
  }
  .container.dark {
    --color: #f5f7fa;
    --accent: #d8334a;
    --cardtext: #f5f7fa;
    --cardtext2: #e6e9ed;
    --background: #282828;
    --cardshadow: rgba(0, 0, 0, 0.1);
  }
</style>
