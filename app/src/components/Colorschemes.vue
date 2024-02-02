<script setup lang='ts'>
  import { ref } from 'vue'

  const colorGroupRef = ref<HTMLDivElement | null>(null)

  const colorList = {
    catppuccin: { 
      primary: '#C6C6FA'
    },
    dracula: { 
      primary: '#735AF6'
    },
    gruvbox: { 
      primary: '#989520'
    },
  }

  function handleClick(colorscheme: string) {
    console.log('Color Button: ', colorscheme)
  }

</script>

<template>
  <div ref='colorGroupRef' class='absolute top-4 right-4 flex space-x-2'>
    <button 
      class='w-4 h-4 rounded-full'
      v-for='(item, key) in colorList'
      @click='handleClick(key)'
      :style='{ background: item.primary }'
    />
  </div>
</template>

<!-- <style> </style> -->
