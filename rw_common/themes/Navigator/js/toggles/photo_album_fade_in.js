elixir.photoAlbumFadeIn = {};
elixir.photoAlbumFadeIn = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function photoAlbumFadeInFunction() {
    // 
    // loads each photo album thumbnail one at a time by fading it in
    // 
    $('.thumbnail-wrap').hide().each(function(count) {
      $(this).delay(60*count).fadeIn(300);
    });
	}
	
	$(document).ready(function() {
		photoAlbumFadeInFunction();
	});	
	
})(elixir.photoAlbumFadeIn);