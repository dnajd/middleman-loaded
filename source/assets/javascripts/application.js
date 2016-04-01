// Bower
// =====
//= require jquery-2.1.0/jquery.js
//= require fastclick-0.6.11/fastclick.js
//= require magnific-popup-0.9.9/jquery.magnific-popup.js
//= require royalslider/jquery.royalslider.js
//= require jquery-waypoints-2.0.4/waypoints.js
//= require jquery-waypoints-2.0.4/waypoints-sticky.js
//= require fitvids-1.0.3/jquery.fitvids.js
//= require social-sharing-buttons/social-buttons.js

// javascripts
// ===========
//= require_tree .

$(document).ready(function() {

  var mobileMenu = new MobileMenu({
    gripper: $('.mobile-menu'),
    container: $('nav')
  });

  mobileMenu.init();

});
