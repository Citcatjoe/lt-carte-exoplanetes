jQuery(document).ready(function($)
{

	if($(window).width() > 1050)
	{
		var planetDistanceTravel = 400;
	}

	//ON ARRIVE SUR IPAD PRO
	if($(window).width() < 1050)
	{
		// var slideXDistanceTravel = 140;
	}

	//ON ARRIVE SUR PETIT IPAD
	if($(window).width() < 800)
	{
		var planetDistanceTravel = 400;
		// var slideXDistanceTravel = 115;
	}

	//ON ARRIVE SUR MOBILE
	if($(window).width() < 500)
	{
		var planetDistanceTravel = 400;
		// var slideXDistanceTravel = 100;
	}

	var slideXDistanceTravel = $(window).width() /2;


	$("h1").click(function(){
		// bah merci
		// alert('con');
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
		$allGlow = $bottomNav.find('.glow');
		$navNoGlow = $bottomNav.find('.no-glow');

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
		TweenLite.set($allGlow, {autoAlpha: 0});

		// Fade in active slide
		TweenLite.set($bottomNavStep3, {className: '-=loading'});

	}
	init();

	$('#slide00 ul li a').on('click', function(e){

		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}

		var temp = parseInt(($(this).attr('href').substring(7, 8))) +1;
		console.log(temp);

		$(".bottom-nav ul li:nth-child(" + temp + ") a").trigger("click");
	});

	// $('#slide00 ul li a').on('click', function(e){

	// 	var $thisIndex = '' + $(this).attr('href').substring(7, 8);
	// 	var $thisGlow = $(this).find('.glow');
	// 	var $thisNoGlow = $(this).find('.no-glow');

	// 	console.log($thisIndex);

	// 	if(e.preventDefault) {
	// 		e.preventDefault();
	// 	} else {
	// 		e.returnValue = false;
	// 	}

	// 	if(!$body.hasClass('is-animating'))
	// 	{
	// 		var sectionFrom = $('.slide.is-active'),
	// 		  	sectionToID = $(this).attr('href'),
	// 		  	sectionTo = $('div' + sectionToID);

	// 		if(sectionFrom.attr('id') != sectionTo.attr('id'))
	// 		{
	// 			scrollToSection(sectionFrom, sectionTo, $thisGlow, $thisNoGlow, $allGlow);
	// 		}
	// 	}
	// });

	// Navigation click
	$navLink.on('click', function(e){


		var $thisGlow = $(this).find('.glow');
		var $thisNoGlow = $(this).find('.no-glow');

		console.log($thisGlow, $thisNoGlow);

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
				scrollToSection(sectionFrom, sectionTo, $thisGlow, $thisNoGlow, $allGlow);
			}
		}
	});

	function scrollToSection(sectionFrom, sectionTo, $thisGlow, $thisNoGlow, $allGlow){


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

					.to($allGlow, 0.25, {autoAlpha: 0, ease:Power4.easeInOut})
					.to($thisGlow, 0.25, {autoAlpha: 1, ease:Power4.easeInOut}, '0')

					.to(sectionFrom, 1, {autoAlpha: 0, ease:Power4.easeInOut, clearProps: 'all'})
					.to($homePlanet, 1, {y: '+=' + planetDistanceTravel})
					

					.to($bottomNav, 0.5, {autoAlpha: 1, ease:Power4.easeInOut})

					.to(sectionTo, 0, {autoAlpha: 0, x: '0%', ease:Power4.easeInOut})
					.to(sectionTo, 1, {autoAlpha: 1, ease:Power4.easeInOut})


					.set($body, {className: '-=is-animating'});
			}
			else
			{
				//SLIDE RIGHT
				tlDown
				.set($body, {className: '+=is-animating'})

				.to(sectionFrom, 0.5, {x: '-=' + slideXDistanceTravel + '%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
				.to($allGlow, 0.25, {autoAlpha: 0, ease:Power4.easeInOut}, '0')
				.to($thisGlow, 0.25, {autoAlpha: 1, ease:Power4.easeInOut})
				.to(sectionTo, 0.5, {x: '0%', ease:Power4.easeInOut}, '0')

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

					.to($allGlow, 0.25, {autoAlpha: 0, ease:Power4.easeInOut})
					.to($thisGlow, 0.25, {autoAlpha: 1, ease:Power4.easeInOut}, '0')

					.to(sectionFrom, 1, {autoAlpha: 0, ease:Power4.easeInOut, clearProps: 'all'})
					.to(sectionTo, 0, {autoAlpha: 0, x: '0%', ease:Power4.easeInOut})
					.to($bottomNav, 1, {autoAlpha: 0, ease:Power4.easeInOut})

					.to($homePlanet, 1, {y: '-=' + planetDistanceTravel})

					.to(sectionTo, 1, {autoAlpha: 1, ease:Power4.easeInOut})

					.set($body, {className: '-=is-animating'});

			}
			else
			{
				//SLIDE LEFT
				tlUp
				.set($body, {className: '+=is-animating'})
				.set(sectionTo, {x: '-' + slideXDistanceTravel + '%'})

				.to(sectionTo, 0.5, {x: '0%', ease:Power4.easeInOut}, '0')
				.to($allGlow, 0.25, {autoAlpha: 0, ease:Power4.easeInOut}, '0')
				.to($thisGlow, 0.25, {autoAlpha: 1, ease:Power4.easeInOut})
				.to(sectionFrom, 0.5, {x: slideXDistanceTravel + '%', ease:Power4.easeInOut}, '0')


				.set($body, {className: '-=is-animating'});
			}

		}
	}

	function setActiveSlide(sectionFrom, sectionTo){

		// Add active class to the current slide
		sectionFrom.removeClass('is-active');
		sectionTo.addClass('is-active');

		// Ajout + animation du graphique
		var c3 = sectionTo.find('.c3-chart');
		if(c3){
			drawChart(c3.data('method'));
		}





		// Highlight current slide in the navigation
		// var currentSlideIndex = parseInt($(sectionTo).attr('id').slice(-2)) -1;
		// $navLi.removeAttr('class');
		// $navLi.eq(currentSlideIndex).addClass('is-active');

	}






});
