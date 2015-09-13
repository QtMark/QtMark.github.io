elixir.sidebarHidden = {};
elixir.sidebarHidden = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function sidebarHiddenFunction() {
		$elixir('#content_container').addClass('large-12 columns').removeClass('large-8 medium-8');
		$elixir('#sidebar').css({'display' : 'none'});
		$elixir('form-input-field').css({'width':'99%'});
	}
	
	$elixir(document).ready(function() {
		sidebarHiddenFunction();
	});	
})(elixir.sidebarHidden);

