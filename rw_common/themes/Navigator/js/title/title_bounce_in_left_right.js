elixir.siteTitleAnimation = {};
elixir.siteTitleAnimation = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function siteTitleAnimationFunction() {
    $('#site_title').addClass('bounceInRight');
    $('#trigger_button').addClass('bounceInLeft');
	}

	$(document).ready(function() {
		siteTitleAnimationFunction();
	});	

	
})(elixir.siteTitleAnimation);



