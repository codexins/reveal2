$(function() {
	"use strict";




	/*--------------------------------------------------------------
	Header full screen background image
    ---------------------------------------------------------------- */

	$(window).on( "load resize", function() {
		$(".fill-screen").css("height", window.innerHeight);
	});


	/*--------------------------------------------------------------
	animating the numbers for counting up for the achievement section
    ---------------------------------------------------------------- */

	$('.counter').counterUp({
        delay: 100,
        time: 3000
    });

	/*--------------------------------------------------------------
	Closes the Responsive Menu on Menu Item Click
    ---------------------------------------------------------------- */

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

	/*--------------------------------------------------------------
	accordian on events section
    ---------------------------------------------------------------- */
     
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
			$(this).find('>.panel-heading').removeClass('active');
			});

		$(this).closest('.panel-heading').toggleClass('active');
	});


	/*--------------------------------------------------------------
	client carouel
	---------------------------------------------------------------- */

	$("#client-carousel").owlCarousel({

	  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  navigation: false,
		  pagination: false,
	  items : 6,
	  itemsDesktop : [1199,6],
	  itemsDesktopSmall : [991,5],
	  itemsTablet : [767,5],
	  itemsTabletSmall : [599,4],
	  itemsMobile : [420, 3]

	});
		/*--------------------------------------------------------------
	client carouel
	---------------------------------------------------------------- */

	$("#client-carousel-rv2").owlCarousel({

		autoPlay: false, //Set AutoPlay to 3 seconds
		navigation: false,
		pagination: false,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [991,5],
		itemsTablet : [767,5],
		itemsTabletSmall : [599,4],
		itemsMobile : [420, 3]

	});




	/*--------------------------------------------------------------
	Isotope Js for Portfolio Section
    ---------------------------------------------------------------- */

	// cache container
	var $isocontainer = $('.portfolio-wrapper');

	// initialize isotope

	$isocontainer.imagesLoaded( function(){
		$isocontainer.isotope({
			filter: "*",
			animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		});
	});

	$(".portfolio-filter ul li").click(function(){
		$(".portfolio-filter ul li").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr('data-filter');
		$isocontainer.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			},
			isResizeBound: true
		});
		return false;
	});  //isotope finished

	/*--------------------------------------------------------------
	Activating Magnific Pop Up
    ---------------------------------------------------------------- */

	  $('.img-pop-up').magnificPopup({
	    type: 'image',
	    gallery:{
	            enabled:true
	            },

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'

	  });


    /*--------------------------------------------------------------
    scrollUp button (Go to top) at the right bottom corner of window
    ---------------------------------------------------------------- */

    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });

    $("#toTop").on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });  //scrollup finished


    /*--------------------------------------------------------------
    smooth scrolling
    ---------------------------------------------------------------- */
	
	$('.nav li a, .slider-btn, .explore').bind('click', function() {
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 90
		}, 1000, 'easeOutCubic');
		event.preventDefault();
	});



    /*--------------------------------------------------------------
	ScrollsPy
    ---------------------------------------------------------------- */
	$('body').scrollspy({
		target: '.navbar',
		offset: 150
	});

	//scrollspy finished



    /*--------------------------------------------------------------
	Activating parallex js
    ---------------------------------------------------------------- */

	$('.concept').parallax({imageSrc: 'images/concept-bg.jpg'});



    /*--------------------------------------------------------------
	Activating site loader
    ---------------------------------------------------------------- */

	jQuery(window).load(function() { 
	    jQuery(".spinner").delay(400).fadeOut("slow");
	    jQuery(".title-load").delay(400).fadeOut("slow");
	    jQuery("#loader").delay(800).fadeOut("slow"); 

	});

	// home version 2 all unic js 

	// full screen slider 

	  	var Height = $(window).height(); 
		$(".slider-item").height(Height);
		$(".header.rv2").height(Height);

	// full screen slider 






	$(".slider").owlCarousel({
		autoplay: false, //Set AutoPlay to 2 seconds
		loop:true,
		nav:true,
		dots: false,
		navigation:true,
		pagination:false,
		items : 1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});



});
