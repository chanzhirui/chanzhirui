$(document).ready(function () {
	$(window).scroll(function(e) {

		parallax();
	});

		function parallax() {
				
				var scrollTop = $(window).scrollTop();

				$('.E').css({
					'top': scrollTop * 10
				})

				$('.d').css({
					'top': scrollTop * 25
		     	})
				
				$('.S').css({
					 'top': scrollTop * 8
			    })
			    $('.h').css({
					 'top': scrollTop * 7
			    })
			    $('.e1').css({
					 'top': scrollTop * 6
			    })
			    $('.e2').css({
					 'top': scrollTop * 5
			    })
			    $('.r').css({
					 'top': scrollTop * 4
			    })
			    $('.a').css({
					 'top': scrollTop * 3
			    })
			    $('.n').css({
					 'top': scrollTop * 2
			    })
	if ($(document).scrollTop() > 800){
			$('.list').addClass('shrink');
			$('.songlist').addClass('songlist_adjust');
		}
		else {
			$('.list').removeClass('shrink');
			$('.songlist').removeClass('songlist_adjust');
		}
	}
	$('a[href^="#"]').on('click', function(event) {
    		var target = $(this.getAttribute('href'));
    		if( target.length ) {
        		event.preventDefault();
        		$('html, body').stop().animate({
            		scrollTop: target.offset().top
            	}, 1000);
   			 }
		});
});


