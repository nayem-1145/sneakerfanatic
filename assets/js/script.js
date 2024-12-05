$(function () {
  //////////
  new WOW().init();
  ///////////////
  //header sticky
  // $(window).on("scroll", function () {
  //   var scrollBarPosition = $(this).scrollTop();

  //   if (scrollBarPosition > 150) {
  //     $("header").addClass("sticky");
  //   } else {
  //     $("header").removeClass("sticky");
  //   }
  // });
  /////////////
  //6. Mobile Menu
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

  /////////////////////////
});
