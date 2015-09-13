elixir.bannerImage = {};
elixir.bannerImage = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerImageFunction() {
		stock = RwGet.pathto("images/banners/","stock_banner_8.jpg");
		$('#banner_image').attr('src', stock);
	}
	
	$(document).ready(function() {
		bannerImageFunction();
	});	
	
})(elixir.bannerImage);