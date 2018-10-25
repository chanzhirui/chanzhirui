$(document).ready(function () {
	var $menu = $('li.list');

	$menu.on('click', function(e) {
		var $target = $(e.target);

		if ($target.text() === 'See what we have') {
			$('.food-recipe.sublist').slideToggle(500);
		} else {
			$('.food-recipe.sublist').slideUp(500);
		}
	});

	var $submenu = $('li.sublistitem');

	$submenu.on('click', function(e) {
		$('.food').hide();

		var $target = $(e.target);

		var dataType = $target.data('type');

		$('.' + dataType).fadeIn(300);
	});
});












