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
		$navLink = $('.starmap ul a'),
		$navLi = $('.starmap ul li');


	function init(){

		// set active slide visible
		TweenLite.set($slideActive, {x: '0%'});

		TweenLite.set($bottomNav, {autoAlpha: 0});

		// Fade in active slide
		TweenLite.set($body, {className: '-=loading'});

	}
	init();

	
		

});
