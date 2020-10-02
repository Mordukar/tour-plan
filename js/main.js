var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button__next",
    prevEl: ".hotel-slider__button__prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
// Карты
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [24.462887675887234, 54.32597486128361],
    zoom: 17,
  });
}

$(".parallax-window").parallax({
  imageSrc: "img/newsletter-bg.jpg",
  speed: "0.5",
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
