if(!$body.hasClass('is-animating'))
		{


			var sectionFrom = $('.slide.is-active'),
			  	sectionToID = $(this).attr('href'),
			  	sectionTo = $('div.slide[id="' + sectionToID + '"]');

			console.log('from ' + sectionFrom.attr('id') + ' to ' + sectionToID);
			// console.log(sectionToID);
			// console.log(sectionTo);

			console.log($(this).attr('href'));
			console.log(sectionFrom);
			console.log(sectionTo);

			if(sectionFrom.attr('id').toString() != sectionTo.attr('id').toString()) 
			{
				// scrollToSection(sectionFrom, sectionTo);	
				console.log('MOVIN');
			} 
			else
			{
				console.log('NOT MOVIN');
			}			 	

		}
		// else
		// {
		// 	console.log('NOTMOVING')
		// }