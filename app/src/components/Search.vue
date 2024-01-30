<template>
  <div 
    id='search' 
    ref='searchRef'
    @keyup='handleSearch'
    class="z-10 flex h-full"
  >
    <div class="w-4/5 relative">
      <input 
        ref='inputRef'
        spellcheck='false' 
        placeholder='search' 
        class="border-0 outilne-0 w-full text-[#d4be98] bg-none tracking-[1px]"
      />
      <ul 
        ref='searchEnginesRef' 
        class="
          flex 
          p-0 
          left-0 
          list-none 
          top-[50px] 
          m-[1em 0 0 0]
          text-[rgba(212, 190, 152, 0.5)]">
        <li v-for='(_, key) in searchEngines'>
          <p :title='searchEngines[key][1]'>@{{ key }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const searchEngines = {
    g: ['https://google.com/search?q=', 'Google'],
    y: ['https://youtube.com/results?search_query=', 'Youtube'],
    np: ['https://search.nixos.org/packages?channel=unstable&query=', 'Nix Packages'],
  }

  const inputRef = ref(null)
  const searchRef = ref(null)
  const searchEnginesRef = ref(null)

  function handleSearch(e) {
    let args = e.target.value.split(' ')
    let prefix = args[0]
    let engine = searchEngines['g'][0] // Google search by default

    onMounted(() => {
      searchEnginesRef.value.childNodes.forEach(engine => {
        if (prefix === engine.firstChild.innerHTML)
          engine.classList.add('active')
        else
          engine.classList.remove('active')
      })
    })

    if (e.key === 'Enter') {
      if (prefix.indexOf('@') === 0) {
        engine = searchEngines[prefix.substr(1)][0]
        args = args.slice(1)
      }
      window.location = engine + encodeURI(args.join(' '))
    }

    if (e.keycode === 91) {
      searchRef.value.classList.remove('active')
    }
  }

  document.onkeydown = e => {
    if (e.key === 's') {
      searchRef.value.classList.add('active') 
      inputRef.value.scrollIntoView()
      setTimeout(() => inputRef.value.focus(), 100)
    }
  }
</script>

<style>
  #search {
    position: absolute;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2px);
    background: rgb(24 24 29 / 80%);
    visibility: hidden;
    top: -100%;
    backdrop-filter: blur(5px);
    transition: all .2s ease-in-out;
  }

  #search.active {
    top: 0;
    visibility: visible;
  }

  #search input {
    padding: .5em 0;
    box-shadow: inset 0 -2px #737373;
    font: 500 22px 'Roboto', sans-serif;
  }

  #search input:focus {
    box-shadow: inset 0 -2px #d4be98;
  }

  #search input::selection {
    color: #32302f;
    background: #e78a4e;
  }

  li { margin: 0 1em 0 0; }
  li.active {
    color: #d4be98;
    font-weight: 700;
  }

  li p {
    cursor: default;
    font-size: 12px;
    transition: all .2s;
    font-family: 'Roboto', sans-serif;
  }
</style>
