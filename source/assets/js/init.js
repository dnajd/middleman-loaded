// -------------------------------------------------------------------
// Init
// -------------------------------------------------------------------

(function ($) {

  $('#mobile-breadcrumbs').click(function(){
    $(this)
            .toggleClass('icon-ellipsis icon-cross')
            .parent().parent().toggleClass('active');
  });

  // Fade in responsive images
  $('[data-src-base],[data-src-base2x]', '.js').addClass('fadeIn');

  // FitVids
  $('body').fitVids();

  // printTitle('sgv fallback');
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
  }

  // printTitle('fastclick.js');
  window.addEventListener('load', function() {
    FastClick.attach(document.body);
  }, false);

  // printTitle('Magnific Popup');
  $('.magnific-popup-demo').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });

  // printTitle('Royalslider');
  $('.slider .royalSlider').royalSlider({
    loop: true,
    imageScaleMode: 'fill',
    autoScaleSlider: true,
    // autoScaleSliderWidth: 1024,
    // autoScaleSliderHeight: 576,
    autoScaleSliderHeight: 340,
    keyboardNavEnabled: true,
    navigateByClick: false,
    globalCaption: false,

    arrowsNav: false,
    arrowsNavAutoHide: true,
    sliderDrag: false,
    transitionType:'fade', // move, fade
    controlNavigation: 'thumbnails', // bullets, thumbnails, tabs, none
    thumbs: {
      spacing: 4,
      fitInViewport: false
    }
  });

  if (Modernizr.mq('only all and (min-width: 60em)')) {
    // printTitle('Waypoints');
    $('.sticky-nav').waypoint('sticky');

    // printTitle('Scrollspy');
    $('#scrollspy').scrollspy({
      scrollSpeed: 200
    });
  }

  // printTitle('Sitenav');
  $('#site-nav').siteNav();

  // printTitle('Mixitup');
  $('#filter-list').mixitup({
    targetSelector: '.item',
    filterSelector: '.filter',
    sortSelector: '.sort',
    buttonEvent: 'click',
    effects: ['fade'/*,'scale'*/],
    listEffects: null,
    easing: 'smooth',
    layoutMode: 'grid',
    targetDisplayGrid: 'inline-block',
    targetDisplayList: 'block',
    gridClass: '',
    listClass: '',
    transitionSpeed: 400,
    showOnLoad: 'all',
    sortOnLoad: false,
    multiFilter: false,
    filterLogic: 'or',
    resizeContainer: true,
    minHeight: 0,
    failClass: 'fail',
    perspectiveDistance: '3000',
    perspectiveOrigin: '50% 50%',
    animateGridList: true,
    onMixLoad: null,
    onMixStart: null,
    onMixEnd: null
  });

  // printTitle('Elevate Zoom');
  $('#zoom-1').elevateZoom({
    zoomType  : 'lens',
    lensShape : 'round',
    lensSize  : 250
  });
  $('#zoom-2').elevateZoom({
    zoomType  : 'inner'
  });
  $('#zoom-3 img').elevateZoom({
    zoomType  : 'inner'
  });

  // printTitle('Accordion');
  $('.accordion').accordion();

  // printTitle('Tabs');
  $('.tabs').tabs();

  // NEW DESIGN
  // ==========

  // Swap out the logo

  if (Modernizr.mq('only all and (min-width: 1200px)')) {
    $('.site-logo img', '.metal-prints-page').attr('src', '/assets/img/bayphoto/bayphoto-logo-white.svg');
    $('.branding', '.metal-prints-page').append('<h1 class="new-design"><span>Metal</span>Prints</h1>');
  }

})(jQuery);
