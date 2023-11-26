// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Мобильное меню
const burger = document.getElementById("burger");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.getElementById("close");

const menuLinks = menu.querySelectorAll("a");

let flag = false;

const toggleMenu = (e) => {
  e.stopPropagation();
  if (!flag) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
  flag = !flag;
};

burger.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu(e);
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("close")) {
    toggleMenu(e);
  }
});
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
  flag = !flag;
});

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  speed: 600,
  autoplay: {
    // delay: 4000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination--top",
    clickable: true,
  },
});

let brandsSlider = null;
const initBrandsSliderWidth = 998;

const brandsSliderInit = () => {
  if (!brandsSlider) {
    brandsSlider = new Swiper(".brands", {
      slidesPerView: "auto",
      spaceBetween: 15,
      speed: 600,
    });
  }
};

const brandsSliderDestroy = () => {
  if (brandsSlider) {
    brandsSlider.destroy();
    brandsSlider = null;
  }
};

let offerCarsSlider = null;
let catalogCarsSlider = null;
const initCarsSlidersWidth = 768;

const initOfferCarsSlider = () => {
  console.log("Slider initial");
  if (!offerCarsSlider) {
    offerCarsSlider = new Swiper(".offers-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      speed: 600,

      breakpoints: {
        768: {
          slidesPerView: 2,
          pagination: {
            el: ".offers-pagination",
            clickable: true,
          },
        },
        998: {
          slidesPerView: 3,
          pagination: {
            el: ".offers-pagination",
            clickable: true,
          },
        },
        1200: {
          slidesPerView: 4,
          pagination: {
            el: ".offers-pagination",
            clickable: true,
          },
        },
      },
    });
  }

  if (!catalogCarsSlider) {
    catalogCarsSlider = new Swiper(".catalog-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      speed: 600,

      breakpoints: {
        768: {
          slidesPerView: 2,
          pagination: {
            el: ".catalog-pagination",
            clickable: true,
          },
        },
        998: {
          slidesPerView: 3,
          pagination: {
            el: ".catalog-pagination",
            clickable: true,
          },
        },
        1200: {
          slidesPerView: 4,
          pagination: {
            el: ".catalog-pagination",
            clickable: true,
          },
        },
      },
    });
  }
};

const destroyOfferCarsSlider = () => {
  if (offerCarsSlider) {
    offerCarsSlider.destroy();
    offerCarsSlider = null;
  }
  if (catalogCarsSlider) {
    catalogCarsSlider.destroy();
    catalogCarsSlider = null;
  }
};

["load", "resize"].forEach((evt) => {
  window.addEventListener(evt, () => {
    let windowWidth = window.innerWidth;

    if (windowWidth <= initBrandsSliderWidth) {
      brandsSliderInit();
    } else {
      brandsSliderDestroy();
    }

    if (windowWidth >= initCarsSlidersWidth) {
      initOfferCarsSlider();
    } else {
      destroyOfferCarsSlider();
    }
  });
});

const feedbackSlider = new Swiper(".feedback-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".feedback-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
});

// Подключаем fancybox
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

const countries = [
  {
    name: "Russia",
    code: "+7",
    mask: "+7 (___) ___-__-__",
    placeholder: "+7 (216) 234-45-67",
    flagUrl: "img/RU.png",
  },
];

const countryInput = document.querySelector(".country");
const countryList = document.querySelector(".country__list");
const phoneInput = document.getElementById("phone");
const flagImg = document.querySelector(".flag-img");
let selectedCountry = countries[0];

phoneInput.addEventListener("click", () => {
  phoneInput.placeholder = "";
  phoneInput.focus();
});

window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    let matrix = selectedCountry.mask,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
    countryList.classList.remove("active");
  }
  phoneInput.addEventListener("input", mask, false);
  phoneInput.addEventListener("focus", mask, false);
  phoneInput.addEventListener("blur", mask, false);
});
