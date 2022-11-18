 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:false,
	    autoplay: false,
	    margin:0,
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps ').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);


function down_def(){
    $(function(){
    $(".hi_it").show();
    $("#down").hide();
    $("#up").show();
});}


function up_def(){
    $(function(){
        $("#up").hide();
        $(".hi_it").hide();
        $("#down").show();
    })
}





var down_button = document.getElementById("down");

down_button.addEventListener("click", down_def , false );


$(function(){
    $(".hi_it").hide();
});

$(function(){
    $("#up").hide();
})

var up_button = document.getElementById("up");
up_button.addEventListener("click", up_def, false);






$(function(){
    $(".hi_it_p").hide();
    $("#up_s").hide();
});

var d_but = document.getElementById("down_s");
var u_but = document.getElementById("up_s");


d_but.addEventListener("click", d_but_f, false);
u_but.addEventListener("click", u_but_f, false);


function d_but_f(){
    $(function(){
        $("#down_s").hide();
        $(".hi_it_p").show();
        $("#up_s").show();
    })
}

function u_but_f(){
    $(function(){
        $(".hi_it_p").hide();
        $("#up_s").hide();
        $("#down_s").show();  
    });
};

$(".row").hide();

$(document).ready(function() {
    $(".row").show();
});

AOS.init({
    duration:800,
});


      $(document).ready(function(){
        $("#detail-projects1").hide();
        $("#detail-projects2").hide();
        $("#detail-projects3").hide();
        $("#detail-projects4").hide();
        $("#detail-projects5").hide();
        $("#detail-projects6").hide();
        $("#detail-projects7").hide();
        $("#detail-projects8").hide();
        $("#detail-projects9").hide();
        $("#detail-projects10").hide();
        $("#detail-projects11").hide();
        $("#detail-projects12").hide();
        $("#detail-projects13").hide();
        $("#detail-projects14").hide();
        $("#detail-projects15").hide();

        $("#button-projects1").click(function(){
            $("#detail-projects1").toggle(150)
        })
                $("#button-projects2").click(function(){
            $("#detail-projects2").toggle(150)
        })
                $("#button-projects3").click(function(){
            $("#detail-projects3").toggle(150)
        })
                $("#button-projects4").click(function(){
            $("#detail-projects4").toggle(150)
        })
                $("#button-projects5").click(function(){
            $("#detail-projects5").toggle(150)
        })
                $("#button-projects6").click(function(){
            $("#detail-projects6").toggle(150)
        })
                $("#button-projects7").click(function(){
            $("#detail-projects7").toggle(150)
        })
                $("#button-projects8").click(function(){
            $("#detail-projects8").toggle(150)
        })
                $("#button-projects9").click(function(){
            $("#detail-projects9").toggle(150)
        })
                $("#button-projects10").click(function(){
            $("#detail-projects10").toggle(150)
        })
                $("#button-projects11").click(function(){
            $("#detail-projects11").toggle(150)
        })
                $("#button-projects12").click(function(){
            $("#detail-projects12").toggle(150)
        })
                $("#button-projects13").click(function(){
            $("#detail-projects13").toggle(150)
        })
                $("#button-projects14").click(function(){
            $("#detail-projects14").toggle(150)
        })
                $("#button-projects15").click(function(){
            $("#detail-projects15").toggle(150)
        })
      })



