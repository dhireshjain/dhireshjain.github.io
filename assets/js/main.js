document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed("#typed-text-heading", {
    strings: ["Welcome to My Portfolio"],
    typeSpeed: 40,
    showCursor: false,
    onComplete: function() {
      document.getElementById("fade-text").style.opacity = 1;
    }
  });
});
