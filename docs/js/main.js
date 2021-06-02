"use strict";

var menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    mobileBack = document.querySelector('.mobile-back'),
    overlay = document.querySelector('.overlay');

var lockScroll = function lockScroll() {
  document.body.classList.add('lock');
};

var unlockScroll = function unlockScroll() {
  document.body.classList.remove('lock');
};

var initialMenu = function initialMenu() {
  document.querySelector('.nav__list--dropdown').classList.remove('transformation');
  document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
  scrollTop();
};

var scrollTop = function scrollTop() {
  menu.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

burger.addEventListener('click', function () {
  menu.classList.add('open');
  overlay.classList.add('open');
  lockScroll();
  initialMenu();
});
overlay.addEventListener('click', function () {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  unlockScroll();
});
menu.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    e.target.closest('.nav__list').classList.add('transformation');
    e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
    scrollTop();
  }

  if (e.target.classList.contains('mobile-back__link')) {
    e.preventDefault();
    e.target.closest('.nav__list--dropdown').classList.remove('transformation');
    e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
  }

  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  }
});
"use strict";

// let btn = document.getElementById('.btnnn');
// let startPlayList = document.querySelector('.coun');
// if (btn) {
// 	btn.addEventListener('click', function () {
// 		startPlayList.classList.toggle('none');
// 	});
// }
var startPlay = document.querySelectorAll("#butt");
var startPlayList = document.querySelectorAll(".coun");
startPlay.forEach(function (item, index) {
  item.addEventListener("click", function () {
    startPlayList[index].classList.toggle("block");
    item.style.cssText = "position:relative; opacity:0; z-index:-1; display:none";
  });
});
"use strict";

var slider = document.querySelector('.swiper-container');
var mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    992: {
      slidesPerView: 2
    }
  }
});
var mySwipers;
var sliders = document.querySelector('.slider-container');

function mobileSlider() {
  if (window.innerWidth <= 545 && sliders.dataset.mobile == 'false') {
    mySwipers = new Swiper(sliders, {
      slidesPerView: 1.25,
      spaceBetween: 10,
      loop: true,
      slideClass: 'product__item' // pagination: {
      // 	el: '.swiper-pagination',
      // 	clickable: true,
      // },

    });
    sliders.dataset.mobile = 'true';
  }

  if (window.innerWidth > 545) {
    sliders.dataset.mobile = 'false';

    if (sliders.classList.contains('swiper-container-initialized')) {
      mySwipers.destroy();
    }
  }
}

mobileSlider();
window.addEventListener('resize', function () {
  mobileSlider();
});
var mySwipers1;
var sliders1 = document.querySelector('.slider-container-1');

function mobileSliders1() {
  if (window.innerWidth <= 545 && sliders1.dataset.mobile == 'false') {
    mySwipers1 = new Swiper(sliders1, {
      slidesPerView: 1.25,
      spaceBetween: 10,
      loop: true,
      slideClass: 'product__item' // pagination: {
      // 	el: '.swiper-pagination',
      // 	clickable: true,
      // },

    });
    sliders1.dataset.mobile = 'true';
  }

  if (window.innerWidth > 545) {
    sliders1.dataset.mobile = 'false';

    if (sliders1.classList.contains('swiper-container-initialized')) {
      mySwipers1.destroy();
    }
  }
}

mobileSliders1();
window.addEventListener('resize', function () {
  mobileSliders1();
});
var mySwipers2;
var sliders2 = document.querySelector('.slider-container-2');

function mobileSliders2() {
  if (window.innerWidth <= 545 && sliders2.dataset.mobile == 'false') {
    mySwipers2 = new Swiper(sliders2, {
      slidesPerView: 1.25,
      spaceBetween: 10,
      loop: true,
      slideClass: 'product__item' // pagination: {
      // 	el: '.swiper-pagination',
      // 	clickable: true,
      // },

    });
    sliders2.dataset.mobile = 'true';
  }

  if (window.innerWidth > 545) {
    sliders2.dataset.mobile = 'false';

    if (sliders2.classList.contains('swiper-container-initialized')) {
      mySwipers2.destroy();
    }
  }
}

mobileSliders2();
window.addEventListener('resize', function () {
  mobileSliders2();
});
var mySwiperIntro;
var sliderIntro = document.querySelector('.slider-container-mob');

function mobileSliderIntro() {
  if (window.innerWidth <= 768 && sliderIntro.dataset.mobile == 'false') {
    mySwiperIntro = new Swiper(sliderIntro, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: 'intro-mob__item' // pagination: {
      // 	el: '.swiper-pagination',
      // 	clickable: true,
      // },

    });
    sliderIntro.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    sliderIntro.dataset.mobile = 'false';

    if (sliderIntro.classList.contains('swiper-container-initialized')) {
      mySwiperIntro.destroy();
    }
  }
}

mobileSliderIntro();
window.addEventListener('resize', function () {
  mobileSliderIntro();
});
"use strict";

videojs(document.querySelector('.video-js'), {
  language: 'ru'
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
