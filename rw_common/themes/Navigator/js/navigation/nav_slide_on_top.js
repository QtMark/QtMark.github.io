elixir.navigationEffect = {};
elixir.navigationEffect = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function navigationEffectFunction() {
		$('#trigger_button').attr( 'data-effect', 'st-effect-1' );
		$('.site_navigation').addClass( 'st-effect-1' ).addClass('st-menu');
		$('.site_navigation').attr( 'id' , 'menu-1');

        /**
         * sidebarEffects.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         * 
         * Copyright 2013, Codrops
         * http://www.codrops.com
         */
         var SidebarMenuEffects = (function() {

            function hasParentClass( e, classname ) {
                if(e === document) return false;
                if( classie.has( e, classname ) ) {
                    return true;
                }
                return e.parentNode && hasParentClass( e.parentNode, classname );
            }

            // http://coveroverflow.com/a/11381730/989439
            function mobilecheck() {
                var check = false;
                (function(a){if(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }

            function init() {

                var container = document.getElementById( 'st-container' ),
                    buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
                    // event type (if mobile use touch events)
                    eventtype = mobilecheck() ? 'touchstart' : 'click',
                    resetMenu = function() {
                        classie.remove( container, 'st-menu-open' );
                        $('#trigger_button').fadeIn(350);
                        $('.st-menu > ul').fadeOut(350);
                    },
                    bodyClickFn = function(evt) {
                        if( !hasParentClass( evt.target, 'st-menu' ) ) {
                            resetMenu();
                            document.removeEventListener( eventtype, bodyClickFn );
                        }
                    };

                $('#closer').click(function(){
                    resetMenu();
                });

                buttons.forEach( function( el, i ) {
                    var effect = el.getAttribute( 'data-effect' );

                    el.addEventListener( eventtype, function( ev ) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        container.className = 'st-container'; // clear
                        classie.add( container, effect );
                        setTimeout( function() {
                            classie.add( container, 'st-menu-open' );
                            $('#trigger_button').fadeOut(350);
                            $('.st-menu > ul').fadeIn(650);
                        }, 25 );
                        document.addEventListener( eventtype, bodyClickFn );
                    });
                } );

            }

            init();

        })();

	}
	
	$(document).ready(function() {
		navigationEffectFunction();
	});	
	
})(elixir.navigationEffect);