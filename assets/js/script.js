$('body').on('click', '.colorbox', function(e) {
    e.preventDefault();
    $('.section').removeClass('fp-section');
    $("[src*='overflow']").parent().addClass("mfp-no-overf");
    $("[src*='mockup']").parent().removeClass("mfp-no-overf");
})
$('body').on('click', '.mfp-image-holder', function(e) {
    e.preventDefault();
    $("[src*='overflow']").parent().addClass("mfp-no-overf");
    $("[src*='mockup']").parent().removeClass("mfp-no-overf");
})
$('body').on('click', '.mfp-close', function(e) {
    e.preventDefault();
    $('.section').addClass('fp-section');
})
$('body').on('click', '.navbar-bars', function(e) {
    e.preventDefault();

    $(this).css({display : "none"});
    $('.navbar-close').css({display : "block"});
    $('.menu-top').addClass('show');
    $('.sl').addClass('lc');
    $('.logo').addClass('logo-bg');
    $('.logo').removeClass('logo-tr');
    $('.sl').removeClass('lr');
    $('body').addClass('body-fixed');
})
$('body').on('click', '.navbar-close', function(e) {
    e.preventDefault();

    $(this).css({display : "none"});
    $('.navbar-bars').css({display : "block"});
    $('.menu-top').removeClass('show');
    $('.sl').removeClass('lc');
    $('.logo').removeClass('logo-bg');
    $('.logo').addClass('logo-tr');
    $('.sl').addClass('lr');
    $('body').removeClass('body-fixed');
})
$(document).ready(function() {
  $('.grid-gallery.gallery').each(function() { 
      $(this).magnificPopup({
          delegate: 'a', 
          type: 'image',
          removalDelay: 500, 
          callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
          closeOnContentClick: false,
          closeOnBgClick: false,
          midClick: true, 
          gallery: {
            enabled:true,
            navigateByImgClick: false,
            preload: [0,1],
            tPrev: 'Prev',
            tNext: 'Next',
          }
      });
  });
});

(function($) {

  'use strict';

  // variables
  var $isAnimatedSecond = $('.about-container .is-animated'),
      $isAnimatedSecondSingle = $('.about-container .is-animated__single'),
      $isAnimatedThird = $('.skills-container .is-animated'),
      $isAnimatedThirdSingle = $('.skills-container .is-animated__single'),
      $isAnimatedFourth = $('.contact-container .is-animated'),
      $isAnimatedFourthSingle = $('.contact-container .is-animated__single');

  // initialize fullPage
  $('.fullpage').fullpage({

    navigation: true,
    animateAnchor: true,
    scrollHorizontally: true,
    onLeave: function(index, nextIndex, direction) {
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInLeft'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated fadeIn').css('animation-delay', '.8s');
      }
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.addClass('animated fadeInLeft');
        $isAnimatedThirdSingle.eq(0).addClass('animated fadeInRight')
        $isAnimatedThirdSingle.eq(1).addClass('animated fadeSkillsDown').css('animation-delay', '.5s');
        $isAnimatedThirdSingle.eq(2).addClass('animated fadeSkillsLeft').css('animation-delay', '.5s');
        $isAnimatedThirdSingle.eq(3).addClass('animated fadeSkillsDown').css('animation-delay', '1s');
        $isAnimatedThirdSingle.eq(4).addClass('animated fadeSkillsLeft').css('animation-delay', '1.5s');
        $isAnimatedThirdSingle.eq(5).addClass('animated fadeSkillsRight').css('animation-delay', '1.5s');
        $isAnimatedThirdSingle.eq(6).addClass('animated fadeSkillsLeft').css('animation-delay', '2s');
        $isAnimatedThirdSingle.eq(7).addClass('animated fadeSkillsRight').css('animation-delay', '2s');
        $isAnimatedThirdSingle.eq(8).addClass('animated fadeSkillsLeft').css('animation-delay', '2.5s');
        $isAnimatedThirdSingle.eq(9).addClass('animated fadeSkillsRight').css('animation-delay', '2.5s');
        $isAnimatedThirdSingle.eq(10).addClass('animated fadeSkillsUp').css('animation-delay', '3s');
        $isAnimatedThirdSingle.eq(11).addClass('animated fadeSkillsLeft').css('animation-delay', '3.5s');
        $isAnimatedThirdSingle.eq(12).addClass('animated fadeSkillsRight').css('animation-delay', '3.5s');
        $isAnimatedThirdSingle.eq(13).addClass('animated fadeSkillsLeft').css('animation-delay', '4s');
        $isAnimatedThirdSingle.eq(14).addClass('animated fadeSkillsRight').css('animation-delay', '4s');
        $isAnimatedThirdSingle.eq(15).addClass('animated fadeSkillsRight').css('animation-delay', '4.5s');
        $isAnimatedThirdSingle.eq(16).addClass('animated fadeSkillsLeft').css('animation-delay', '4.5s');
      }
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
        $isAnimatedFourth.addClass('animated fadeInLeft');
        $isAnimatedFourthSingle.addClass('animated fadeIn').css('animation-delay', '.5s');
      }
    }
  });
})(jQuery);

new WOW().init();
 
$(".magicwall").magicWall({
    maxItemHeight: 160,
    breakpoints: "1200,800,640,480",
    options_1200: {
      columnsCount: 3,
      rowsCount: 3
    },
    options_800: {
      columnsCount: 3,
      rowsCount: 2
    },
    options_640: {
      columnsCount: 2,
      rowsCount: 3
    },
    options_480: {
      columnsCount: false,
    }
  });