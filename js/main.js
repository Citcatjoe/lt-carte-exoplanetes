jQuery(document).ready(function($) 
{



	$("h1").click(function(){
		alert('con');
	});

	var sectionFrom, 
		$slide = $('.slide'),
		$slideActive = $('.slide.is-active'),
		$body = $('body'),
		$bottomNav = $body.find('.bottom-nav'),
		$bottomNavStepHome = $bottomNav.find('#00'),
		$bottomNavStep1 = $bottomNav.find('#01'),
		$bottomNavStep2 = $bottomNav.find('#02'),
		$bottomNavStep3 = $bottomNav.find('#03'),
		$bottomNavStep4 = $bottomNav.find('#04'),
		$bottomNavStep5 = $bottomNav.find('#05');
		$navLink = $bottomNav.find('ul a');

	var	$homeKw = $('.home .keyword'),
		$homeTitle = $('.home h1'),
		$homeP = $('.home p'),
		$homePlanet = $('body .planet');
		// $navLi = $('.starmap ul li');


	function init(){

		// set active slide visible
		TweenLite.set($slideActive, {x: '0%'});

		//TweenLite.set($bottomNav, {autoAlpha: 0});
		TweenLite.set($bottomNav, {autoAlpha: 0});

		// Fade in active slide
		TweenLite.set($bottomNavStep3, {className: '-=loading'});

	}
	init();

	$('button').on('click', function(e){
		$('.bottom-nav ul li:last-child a').trigger('click');
	});

	// Navigation click
	$navLink.on('click', function(e){
		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}

		if(!$body.hasClass('is-animating'))
		{
			var sectionFrom = $('.slide.is-active'),
			  	sectionToID = $(this).attr('href'),
			  	sectionTo = $('div' + sectionToID);

			if(sectionFrom.attr('id') != sectionTo.attr('id')) 
			{
				scrollToSection(sectionFrom, sectionTo);	
			} 
		}
	});

	function scrollToSection(sectionFrom, sectionTo){

		
		var tlDown = new TimelineMax({onComplete: setActiveSlide(sectionFrom, sectionTo)});
		var tlUp = new TimelineMax();
		var tlFromHome = new TimelineMax();
		var tlToHome = new TimelineMax();


		if (sectionFrom.index() < sectionTo.index())
		{
			if(sectionFrom.index() == 0)
			{
				//SLIDE FROM HOME
				tlFromHome
					.set($body, {className: '+=is-animating'})

					
					.to($homePlanet, 1.2, {y: '+=300'})
					.to(sectionFrom, 1.2, {autoAlpha: 0, ease:Power4.easeInOut, clearProps: 'all'})

					.to($bottomNav, 1.2, {autoAlpha: 1, ease:Power4.easeInOut})

					.to(sectionTo, 0, {autoAlpha: 0, x: '0%', ease:Power4.easeInOut})
					.to(sectionTo, 1.2, {autoAlpha: 1, ease:Power4.easeInOut})

					.set($body, {className: '-=is-animating'});
			}
			else
			{
				//SLIDE RIGHT
				tlDown
				.set($body, {className: '+=is-animating'})
				.to(sectionFrom, 1.2, {x: '-=100%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
				.to(sectionTo, 1.2, {x: '0%', ease:Power4.easeInOut}, '0')
				.set($body, {className: '-=is-animating'});
			}

			
		}

		else
		{
			if(sectionTo.index() == 0)
			{
				//SLIDE TO HOME
				tlToHome
					.set($body, {className: '+=is-animating'})
					.to(sectionFrom, 1.2, {autoAlpha: 0, ease:Power4.easeInOut, clearProps: 'all'})
					.to(sectionTo, 0, {autoAlpha: 0, x: '0%', ease:Power4.easeInOut})

					.to($bottomNav, 1.2, {autoAlpha: 0, ease:Power4.easeInOut})

					.to($homePlanet, 1.2, {y: '-=300'})
					.to(sectionTo, 1.2, {autoAlpha: 1, ease:Power4.easeInOut})
					
					.set($body, {className: '-=is-animating'});

			}
			else
			{
				//SLIDE LEFT
				tlUp
				.set($body, {className: '+=is-animating'})
				.set(sectionTo, {x: '-100%'})
				.to(sectionTo, 1.2, {x: '0%', ease:Power4.easeInOut}, '0')
				.to(sectionFrom, 1.2, {x: '100%', ease:Power4.easeInOut}, '0')
				.set($body, {className: '-=is-animating'});
			}
			
		}
	}

	function setActiveSlide(sectionFrom, sectionTo){

		// Add active class to the current slide
		sectionFrom.removeClass('is-active');
		sectionTo.addClass('is-active');

		// Highlight current slide in the navigation
		// var currentSlideIndex = parseInt($(sectionTo).attr('id').slice(-2)) -1;
		// $navLi.removeAttr('class');
		// $navLi.eq(currentSlideIndex).addClass('is-active');
		
	}



	
		

});
