<template>
  <button class="
    darkmode 
    fixed 
    p-4
    m-px
    z-10 
    top-4 
    right-8 
    rounded-full 
    cursor-pointer"
  />
  <div 
    ref='clip'
    class='clip fixed top-12 right-12 w-0 h-0 z-2 rounded-full' 
  />
</template>

<script setup>
  import { ref } from 'vue'

  let scroll = ref(0)
  const clip = ref(null)
  let buttonEnabled = ref(true)

  const scrollbind = e => e.addEventListener('scroll', () => {
    scroll = this.scrollTop
    if(container.length > 1)
      container.scrollTop = scroll
  })

  function handleClick() {
    if (!buttonEnabled || !clip) return
    
    buttonEnabled = false
    
    // Copy container to inside clip
    document.querySelector('.clip').innerHTML = document.querySelector('body > .container').outerHTML
    
    scrollbind(document.querySelector('.clip .container'))
    
    // Toggle dark mode and set scroll
    document.querySelector('.clip .container').classList.toggle('dark')
    document.querySelector('.clip .container').scrollIntoView(scroll) 
    
    // Animate the clip
    document.querySelector('.clip').classList.add('animate-clip') 
    
    // Slightly before animation finishes but when the circle will have covered the screen, 
    // gives us 500ms to make the changes we need which is plenty. Slower computers will not see a flash, 
    // but elements may not have loaded - if it really is an issue delay line 19 a little.
    
    setTimeout(() => {
      // Replace container with clip html
      document.querySelector('body > .container').outerHTML = document.querySelector('.clip').innerHTML 
      
      // bind scroll with new container
      scrollbind(document.querySelector('body > .container')) 
      
      // Set scroll position
      document.querySelector('body > .container').scrollIntoView(scroll) 
      
      buttonEnabled = true
    }, 1000)
  }

  document.body.addEventListener('click', handleClick)

  scrollbind(container)
</script>

<style> 
  .container {
    color: var(--color);
    background: var(--background);
  }
  body .container:not(.dark) {
    --background: #a9b665;
    --color: #323133;
    --cardtext: #323133;
    --cardtext2: #3c3b3d;
    --cardshadow: rgba(0, 0, 0, 0.1);
    --accent: #bf263c;
  }
  body .container.dark {
    --background: #282828;
    --color: #f5f7fa;
    --cardtext: #f5f7fa;
    --cardtext2: #e6e9ed;
    --cardshadow: rgba(0, 0, 0, 0.1);
    --accent: #d8334a;
  }
  body .container .darkmode {
    color: var(--accent);
    transition: 0.25s -0.05s;
    box-shadow: 0 0 1rem -0.25rem var(--accent), inset 0 0 1rem -0.75rem var(--accent);
  }
  body .container .darkmode:hover {
    box-shadow: 0 0 1rem -0.25rem var(--accent), inset 0 0 1rem -0.25rem var(--accent);
  }
</style>
