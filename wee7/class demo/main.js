$(document).ready(function () {

	var $menu = $('li.list__item');

	$menu.on('click', function(e) {
		console.log('qq');
		var $target = $(e.target);

		if ($target.text() === 'What we Have') {
			$('.What we Have.sublist').slideToggle(500);
		} else {
			$('.What we Have.sublist').slideUp(500);
		}
	});

	var $submenu = $('li.sublist__item');

	$submenu.on('click', function(e) {
		$('.What we Have-info').hide();

		var $target = $(e.target);

		var dataType = $target.data('type');

		$('.' + dataType).fadeIn(300);
	});
});
