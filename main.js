let header = document.queryselector('header');
let menu = document.queryselector('#menu-icon');
let navbar=document.queryselector('.navbar');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
})
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}



var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });