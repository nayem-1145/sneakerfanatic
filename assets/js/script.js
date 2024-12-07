$(function () {

  new WOW().init();

  //header sticky
  $(window).on("scroll", function () {
    var scrollBarPosition = $(this).scrollTop();

    if (scrollBarPosition > 150) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });


  // Toggle the mobile menu and update mobile-menu-icon
  $(".mobile-btn").on("click", function (e) {
    e.stopPropagation(); // Prevent event propagation
    $(".mobile-menu").toggleClass("active");
    $("body").toggleClass("overflow-hidden");

    // Toggle the active class on the mobile-menu-icon
    $(".mobile-menu-icon").toggleClass("active");

    // If the menu is hidden, ensure active class is removed
    if (!$(".mobile-menu").hasClass("active")) {
      $(".mobile-menu-icon").removeClass("active");
    }
  });

  // Close the mobile menu and update mobile-menu-icon when clicking outside
  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".mobile-menu").length &&
      !$(e.target).closest(".mobile-btn").length
    ) {
      $(".mobile-menu").removeClass("active");
      $("body").removeClass("overflow-hidden");
      $(".mobile-menu-icon").removeClass("active"); // Ensure active class is removed
    }
  });


  /** category component */
  $(".ct-single-item").each(function(){
    $(this).hover(function(){
      $(this).find("p").slideToggle();
    });
  })



  //category slider
  var ct_item_slider = new Swiper('.ct-item-slider', {
    loop: true,
    slidesPerView: "4",
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 5,
      },
      2500: {
        slidesPerView: 6,
      },
    },
    
  });
  
});
