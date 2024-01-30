let scroll = 0
let buttonenabled = true
const container = document.querySelector('.container')

document.body.addEventListener('click', el => {
  if (!buttonenabled || !el.target.classList.contains('darkmode'))
    return
  
  buttonenabled = false
  
  // Copy container to inside clip
  document.querySelector('.clip').innerHTML = document.querySelector('body > .container').outerHTML
  
  scrollbind(document.querySelector('.clip .container'))
  
  // Toggle dark mode and set scroll
  document.querySelector('.clip .container').classList.toggle('dark')
  document.querySelector('.clip .container').scrollIntoView(scroll) 
  
  // Animate the clip
  document.querySelector('.clip').classList.add('anim') 
  
  // Slightly before animation finishes but when the circle will have covered the screen, 
  // gives us 500ms to make the changes we need which is plenty. Slower computers will not see a flash, 
  // but elements may not have loaded - if it really is an issue delay line 19 a little.
  
  setTimeout(() => {
    // Replace container with clip html
    document.querySelector('body > .container').outerHTML = document.querySelector(".clip").innerHTML 
    
    // bind scroll with new container
    scrollbind(document.querySelector("body > .container")) 
    
    // Set scroll position
    document.querySelector("body > .container").scrollIntoView(scroll) 
    
    // Hide clip
    document.querySelector(".clip").innerHTML = ""
    document.querySelector(".clip").classList.remove("anim") 
    
    buttonenabled = true
  }, 1000)
})

const scrollbind = el => el.addEventListener("scroll", () => {
  croll = this.scrollTop
  if(container.length > 1) //No point setting it if there is only 1
    container.scrollTop = scroll
})

scrollbind(container)
