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
		// $navLi = $('.starmap ul li');


	function init(){

		// set active slide visible
		TweenLite.set($slideActive, {x: '0%'});

		//TweenLite.set($bottomNav, {autoAlpha: 0});
		//TweenLite.set($bottomNavStep3, {autoAlpha: 0});

		// Fade in active slide
		TweenLite.set($bottomNavStep3, {className: '-=loading'});

	}
	init();

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

			 // console.log(sectionFrom);
			 //  console.log(sectionToID);
			 //   console.log(sectionTo);

			if(sectionFrom.attr('id') != sectionTo.attr('id')) 
			{
				//scrollToSection(sectionFrom, sectionTo);	
				console.log('movin');
			} 
			// else 
			// {
			// 	console.log('no move mister !');
			// }  	

		}
	});



	
		

});
