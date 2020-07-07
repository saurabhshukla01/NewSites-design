(function ($) {
  "use strict";

  // Mobile Navigation
  if ($('.main-nav').length) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('header').append($mobile_nav);
    $('header').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
    $('header').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });
    
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

})(jQuery);



$( ".coloum" ).hover(
  function() {
      $(this).find('ul').show();
  }, function() {
      $(this).find('ul').hide();
  }
);

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
    autoplay:true,
      itemsDesktop : [1499,1],
      itemsDesktopSmall : [1199,1],
      itemsTablet : [899,1],
      itemsMobile : [599,1],
      navigation : true,
      singleItem:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autoplaySpeed:3000,
      loop:true,
//      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
  });
  
  
  $("#owl-example1").owlCarousel({
    autoplay:true,
    itemsDesktop : [1499,5],
    itemsDesktopSmall : [1199,5],
    itemsTablet : [899,3],
    itemsMobile : [599,1],
    navigation : true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autoplaySpeed:3000,  
    loop:true,
//      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
});


});

$(window).bind("scroll", function () {
	if ($(this).scrollTop() > 100) {
		$(".back-to-top").fadeIn(400);
	} else {
		$('.back-to-top').fadeOut(400);
	}     
});
$('.back-to-top').click(function(){
	$('html, body').animate({scrollTop: '0px'}, 1000);
 }); 




 "use strict"; // Start of use strict
(function($) {


    function bootstrapAnimatedLayer() {

        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = "webkitAnimationEnd animationend";

            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data("animation");
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $myCarousel = $("#minimal-bootstrap-carousel"),
            $firstAnimatingElems = $myCarousel
            .find(".carousel-item:first")
            .find("[data-animation ^= 'animated']");

        //Initialize carousel
        $myCarousel.carousel();

        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);

        //Other slides to be animated on carousel slide event
        $myCarousel.on("slide.bs.carousel", function(e) {
            var $animatingElems = $(e.relatedTarget).find(
                "[data-animation ^= 'animated']"
            );
            doAnimations($animatingElems);
        });
    }

    bootstrapAnimatedLayer();



})(jQuery);




// photos source: http://blog.repponen.com/blog/2014/7/28/moscow

$(document).ready(function() {
  $('.container--gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 230,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});