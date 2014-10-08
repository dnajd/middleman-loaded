// -------------------------------------------------------------------
// Init
// -------------------------------------------------------------------

(function ($) {
  $(document).ready(function() {

    // Init mobileMenu + options
   $('.mobile-menu').mobileMenu();

   // Spin the logo on hover
   $('.fa-flask').parent('a').hover(function() {
     $(this).addClass('fa-spin');
   }, function() {
     $(this).removeClass('fa-spin');
   });

  });
})(jQuery);
