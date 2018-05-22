$(() => {
    'use strict';

    $.scrollify({
        section: '.scrollable',
        updateHash: false,
        overflowScroll: true,
        standardScrollElements: '#nav-main'
    });

    $('#learn-more').on('click', () => {
        $.scrollify.next();
    });

    $('#nav-main').stickUp({
        scrollHide: true
    });

    function render(section) {
        $('#content-wrapper').html('');
        var data;
        $.getJSON(`../json/${section}.json`, (d) => {
            data = d;
        });

        $.get('../templates/section.mst', (t) => {
            var rendered = Mustache.render(t, data);
            $('#content-wrapper').html(rendered);

            $('.img-esperimento').magnificPopup({
                type: 'image'
            });
        });
    }

    $('#hamburger').on('click', () => {
        $('#content').toggleClass('col-lg-8');
        $('#side-nav').toggle();
    });

    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-nav .nav-link.active').removeClass('active');
        $(this).addClass('active');
        render($(this).data('section').toLowerCase());
        $.scrollify.update();
    });
});