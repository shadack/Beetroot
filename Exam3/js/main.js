;(function ($) {
    $(document).ready(function () {
        $('.team__slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<img class="team__slider__arrows left" src="pics/team_arrowleft.png" alt="prev-arrow">',
            nextArrow: '<img class="team__slider__arrows right" src="pics/interface-arrowright.png" alt="next-arrow">'

        });
    });
    $(document).ready(function () {
        var map;
        var mapContainer = $('#contacts__map')[0];
        var mapCenter = {lat: 48.734179, lng: 37.579218};

        map = new google.maps.Map(mapContainer, {
            center: mapCenter,
            zoom: 15,
            disableDefaultUI: true,
            scrollwheel: false
        });
        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            icon: 'pics/lotus.png'
        })

    });
    $(document).ready(function () {
        $("#about__anchor").click(function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
        $("#services__anchor").click(function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
        $("#works__slider__anchor").click(function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
        $("#contacts__anchor").click(function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
        $("#top__scroll").click(function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
    });
})(jQuery);