elixir.sloganAnimation = {};
elixir.sloganAnimation = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function sloganAnimationFunction() {
    $('#slogan').addClass('fadeInDown');
	}

	$(document).ready(function() {
		sloganAnimationFunction();
	});	

	
})(elixir.sloganAnimation);



