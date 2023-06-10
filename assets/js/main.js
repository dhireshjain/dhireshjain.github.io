$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed("#typed-text-heading", {
    strings: ["Welcome to My Portfolio"],
    typeSpeed: 60,
    showCursor: false,
    onComplete: function() {
      document.getElementById("fade-text").style.opacity = 1;
    }
  });
  
});
