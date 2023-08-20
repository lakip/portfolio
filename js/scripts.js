(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

    const videoSrc = document.querySelector("https://www.loom.com/share/5c31c268f44349308e53447c3d6908f9?sid=3034b20b-c1fc-4ee4-ae5b-b7288ddcb0a0");
    const videoTag = document.querySelector("#video-tag");
    const inputTag = document.querySelector("#input-tag");

    inputTag.addEventListener('change',  readVideo)

    function readVideo(event) {
      console.log(event.target.files)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          console.log('loaded')
          videoSrc.src = e.target.result
          videoTag.load()
        }.bind(this)

        reader.readAsDataURL(event.target.files[0]);
      }
    }

})(jQuery); // End of use strict
