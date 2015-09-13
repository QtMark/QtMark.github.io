elixir.ecOneEdgeToEdge = {};
elixir.ecOneEdgeToEdge = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function ecOneEdgeToEdgeFunction() {
    $('#extraContent1 > div').removeClass('row').removeClass('width_setting').removeClass('theme_padding');
    $('#extraContent1 > div > div').removeClass('large-12').removeClass('columns');
	}
	
	$(document).ready(function() {
		ecOneEdgeToEdgeFunction();
	});	

	
})(elixir.ecOneEdgeToEdge);