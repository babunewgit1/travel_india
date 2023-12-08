(function ($) {
  $(document).ready(function () {
    // Scroll to Top
    jQuery(".scrolltotop").click(function () {
      jQuery("html").animate({ scrollTop: "0px" }, 400);
      return false;
    });

    jQuery(window).scroll(function () {
      var upto = jQuery(window).scrollTop();
      if (upto > 500) {
        jQuery(".scrolltotop").fadeIn();
      } else {
        jQuery(".scrolltotop").fadeOut();
      }
    });

    // code for packge slider
    $(".p1packge_slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    // code for packge slider_nav
    var owlOne = $(".p1packge_slider");
    owlOne.owlCarousel();
    $("#packge_right").click(function () {
      owlOne.trigger("next.owl.carousel");
    });
    $("#packge_left").click(function () {
      owlOne.trigger("prev.owl.carousel", [300]);
    });

    // code for popular slider
    $(".popular_slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    // code for popular slider_nav
    var owlTwo = $(".popular_slider");
    owlTwo.owlCarousel();
    $("#popular_right").click(function () {
      owlTwo.trigger("next.owl.carousel");
    });
    $("#popular_left").click(function () {
      owlTwo.trigger("prev.owl.carousel", [300]);
    });

    // code for p1blog slider
    $(".p1blog_slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    // code for p1blog slider_nav
    var owlThree = $(".p1blog_slider");
    owlThree.owlCarousel();
    $("#blg_right").click(function () {
      owlThree.trigger("next.owl.carousel");
    });
    $("#blg_left").click(function () {
      owlThree.trigger("prev.owl.carousel", [300]);
    });

    // code for varti slider
    $(".varti_slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: "slideOutUp",
      animateIn: "slideInUp",
      touchDrag: false,
      mouseDrag: false,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        768: {
          items: 1,
          dots: false,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    // code for varti slider_nav
    var owlFour = $(".varti_slider");
    owlFour.owlCarousel();
    $("#navup").click(function () {
      owlFour.trigger("next.owl.carousel");
    });
    $("#navdown").click(function () {
      owlFour.trigger("prev.owl.carousel", [300]);
    });

    // code for bed slider
    $(".bed-slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    // code for varti slider_nav
    var owlSix = $(".bed-slider");
    owlSix.owlCarousel();
    $("#p3right").click(function () {
      owlSix.trigger("next.owl.carousel");
    });
    $("#p3left").click(function () {
      owlSix.trigger("prev.owl.carousel", [300]);
    });
  });
})(jQuery);
