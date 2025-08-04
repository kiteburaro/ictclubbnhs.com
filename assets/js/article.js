const swiper = new Swiper('.slider-wrapper', {
 loop: true,
 grabCursor: true,
 spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
      slidesPerView: 1
    },
    720:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }

  }
});



const goUpBtn = document.getElementById("btn-up");

console.log(goUpBtn);

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction(){
  if(
    document.body.scrollTop >200 || document.documentElement.scrollTop > 200
  ) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
}

goUpBtn.onclick =() => {
  goUpBtn.style.display = "none";
  window.scroll({
    top:0,
    behavior: "smooth",
  });
};