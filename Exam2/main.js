//anchor
$(document).ready(function () {
    $("#anchor_link").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    $("#portfolio_link").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    $("#team_link").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    $("#contact_link").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    $("#aside_anchor").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
});
// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 30,
        gutter: 10
    },
    getSortData: {
        category: '[class]',
        weight: function (itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
    }
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('a.filter').click(function (e) {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({filter: filterValue});
    e.preventDefault();
});

$(document).ready(function () {
    $('.team_slider').slick({
        dots: true,
        arrows: false
    });

    $('#aside_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    });
});
$(document).ready(function () {
    var map;
    var mapContainer = $('#map')[0];
    var mapCenter = {lat: 48.734179, lng: 37.579218};

    map = new google.maps.Map(mapContainer, {
        center: mapCenter,
        zoom: 16,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        icon: "bouncy-assets/heavy-metal.svg"
    })
});




