elixir.bannerFadeIn = {};
elixir.bannerFadeIn = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerHideFunction() {
    $('#banner_image').css({'opacity':'0'});
	}

	function bannerFadeInFunction() {
    $('#banner_image').animate({ opacity: 1 }, 800);
	}
	
	$(document).ready(function() {
		bannerHideFunction();
	});	

	$(window).load(function() {
		bannerFadeInFunction();
	});	
	
})(elixir.bannerFadeIn);