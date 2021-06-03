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

// const anchors = document.querySelectorAll('a.nav__link')
// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
//     const blockID = anchor.getAttribute('href')
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }
// собираем все якоря; устанавливаем время анимации и количество кадров
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;
anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault(); // для каждого якоря берем соответствующий ему элемент и определяем его координату Y

    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset; // запускаем интервал, в котором

    var scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount; // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      } // время интервала равняется частному от времени анимации и к-ва кадров

    }, animationTime / framesCount);
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

if (document.querySelector('.slider-container')) {
  var mobileSliders = function mobileSliders() {
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
  };

  var mySwipers;
  var sliders = document.querySelector('.slider-container');
  mobileSliders();
  window.addEventListener('resize', function () {
    mobileSliders();
  });
}

if (document.querySelector('.slider-container-1')) {
  var mobileSliders1 = function mobileSliders1() {
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
  };

  var mySwipers1;
  var sliders1 = document.querySelector('.slider-container-1');
  mobileSliders1();
  window.addEventListener('resize', function () {
    mobileSliders1();
  });
}

if (document.querySelector('.slider-container-2')) {
  var mobileSliders2 = function mobileSliders2() {
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
  };

  var mySwipers2;
  var sliders2 = document.querySelector('.slider-container-2');
  mobileSliders2();
  window.addEventListener('resize', function () {
    mobileSliders2();
  });
}

var sliderI = document.querySelector('.intro-mob');
var mySwiperI = new Swiper(sliderI, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination-i',
    clickable: true
  }
});
"use strict";

if (document.querySelector('.video-js')) {
  videojs(document.querySelector('.video-js'), {
    language: 'ru'
  });
}
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
