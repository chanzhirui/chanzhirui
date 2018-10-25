$(document).ready(function () {

	var $menu = $('li.list__item');

	$menu.on('click', function(e) {
		console.log('qq');
		var $target = $(e.target);

		if ($target.text() === 'What we Have') {
			$('.sublist .sublist__item').slideToggle(500);
		} else {
			$('.sublist .sublist__item').slideUp(500);
		}
	});

	var $submenu = $('li.sublist__item');

	$submenu.on('click', function(e) {
		$('.menu-info').hide();

		var $target = $(e.target);

		var dataType = $target.data('type');

		$('.' + dataType).fadeIn(300);
	});
});
        $( ".cupt" ).append("Cookie cup");
        $( ".cupi" ).append("Ingredient");
    	$( ".cupingredient" )
    	.append( "<p>1 pouch (17.5 oz) Betty Crocker™ sugar cookie mix Butter</p><p>and egg called for on cookie mix pouch for drop cookies</p><p>1/4 cup plus 2 teaspoons red, green and white candy sprinkles</p><p>1 container Betty Crocker™ Rich & Creamy vanilla frosting</p><p>1 1/2 teaspoons Betty Crocker™ red gel food color</p>" );

