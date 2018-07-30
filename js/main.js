$(document).ready(function() {

    // Cambiar el menu al hacer Scroll UP & DOWN
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#menu').removeClass('navbar-transparent');
            $('#menu').addClass('navbar-visible');
        } else {
            $('#menu').removeClass('navbar-visible');
            $('#menu').addClass('navbar-transparent');
        }
    });

    var height = $(window).height();

    ajustesIniciales();

    function ajustesIniciales() {
        $("#body").css({ "margin-top": height - 60 + "px" })
    } // ./ Posiciona el Down 

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTop / 70;

        if (scrollTop < height) {
            $("header#baner").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            }); // ./ CSS
        } // ./ IF 
    }); // ./ Scroll Blur
    // Script pra el menu One-Pagen
    var navbar = $('.navbar ul li a');
    navbar.on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Correo recargar datos
    $("#forContacto").submit(function( event){
            event.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: 'contactar.php',
                    data: $(this).serialize(),
                    success: function(data){
                        $('#respuesta').slideDown();
                        $('#respuesta').html(data);
                        $('form')[0].reset();
                    }
                });
            return false;
        });

    // $('.grid').masonry();
    $('.grid').masonry({
        // columnWidth: 200,
        // itemSelector: '.grid-item'
    });

    //Script to Activate the Carousel
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
});
