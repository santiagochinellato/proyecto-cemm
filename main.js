// // menu mobile
// var nav = document.querySelector("nav");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 500 && window.innerWidth <= 767) {
//     // nav.classList.add('bg-dark', 'shadow');
//     document.getElementById("display").style.display = "inline";
//   } else {
//     // nav.classList.remove('bg-dark', 'shadow');
//     document.getElementById("display").style.display = "none";
//   }
// });
// // menu mobile
// // menu desktop
// var nav = document.getElementById("nav");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 500) {
//     // nav.classList.add('menu-desktop', 'shadow');
//     document.getElementById("nav").style.backgroundColor = "#FFFFFF";
//   } else {
//     // nav.classList.remove('menu-desktop', 'shadow')
//     document.getElementById("nav").style.backgroundColor = "transparent";
//   }
// });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
