elixir.siteTitleAnimationAnimation = {};
elixir.siteTitleAnimationAnimation = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function siteTitleAnimationFunction() {
    $('#site_title').removeClass('animated');
    $('#trigger_button').removeClass('animated');
	}

	$(document).ready(function() {
		siteTitleAnimationFunction();
	});	

	
})(elixir.siteTitleAnimation);



