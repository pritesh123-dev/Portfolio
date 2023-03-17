const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarMenu = document.getElementsByClassName('navbar-menu')[0];

toggleButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('menu-active');
  toggleButton.classList.toggle('active');
});

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let backtotop = document.querySelector('.back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}


let selectHeader = document.querySelector('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


  