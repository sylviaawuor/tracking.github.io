$(document).ready(function(){

  $(".mobile-menu-icon.fa-bars").click(function(){
        $(".hidden-mobile").slideDown();
    });

    $(".mobile-menu-icon.fa-times").click(function(){
        $(".hidden-mobile").slideUp();
    });

    $('.bxslider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 500,  pause: 6000});

    $('select').niceSelect();

    $(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link2');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});

    jQuery(document).ready(function($) {
  		$("#owl-example").owlCarousel({
  			navigation:true,
  			navigationText:false,
  			pagination:false,
  			autoPlay:	true
  		});
  });

    // Show or hide the sticky footer button
     $(window).scroll(function() {
       if ($(this).scrollTop() > 200) {
         $('.go-top').fadeIn(200);
       } else {
         $('.go-top').fadeOut(200);
       }
     });

     // Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();

				$('html, body').animate({scrollTop: 0}, 300);
			})

     $('#horizontalTab').easyResponsiveTabs({
                 type: 'default', //Types: default, vertical, accordion
                 width: 'auto', //auto or any width like 600px
                 fit: true,   // 100% fit in a container
                 closed: 'accordion', // Start closed if in accordion view
                 activate: function(event) { // Callback function if tab is switched
                     var $tab = $(this);
                     var $info = $('#tabInfo');
                     var $name = $('span', $info);

                     $name.text($tab.text());

                     $info.show();
                 }
             });



});

new AnimOnScroll( document.getElementById( 'grid' ), {
minDuration : 0.4,
maxDuration : 0.7,
viewportFactor : 0.2
} );

new WOW().init();
