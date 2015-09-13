elixir.sloganAnimation = {};
elixir.sloganAnimation = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function sloganAnimationFunction() {
    $('#slogan').addClass('flipInX');
	}

	$(window).load(function() {
		sloganAnimationFunction();
	});	

	
})(elixir.sloganAnimation);



