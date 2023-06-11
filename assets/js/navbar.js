document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar-container");
  
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(error => {
        console.error("Error fetching navbar:", error);
      });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
    
  });