let main_nav = document.querySelector('.container-xl')
let responsive_nav = document.querySelector('.nav-hack')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 75) {                       /**** doing scroll ****/
      main_nav.classList.remove('d-lg-block')
      responsive_nav.classList.remove('d-lg-none')
  }
  if (window.scrollY <= 75) {
    main_nav.classList.add('d-lg-block')
      responsive_nav.classList.add('d-lg-none')    /**** undo scroll  ****/

  }
})

