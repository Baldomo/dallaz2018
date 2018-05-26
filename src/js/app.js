$(function () {
    'use strict';

    var templates = {
        "home": "../templates/home.mst",
        "luce": "../templates/section.mst",
        "onde": "../templates/section.mst",
        "suono": "../templates/section.mst",
        "pw": "../templates/section.mst"
    }

    $.scrollify({
        section: '.scrollable',
        updateHash: false,
        overflowScroll: true,
        standardScrollElements: '#nav-main, footer'
    });

    $('#learn-more').on('click', () => {
        $.scrollify.next();
    });

    $('#nav-main').stickUp({
        scrollHide: true
    });

    function render(section) {
        $('#content-wrapper').html('');
        $.getJSON(`../json/${section}.json`, (d) => {
            $.get(templates[section], (t) => {
                var rendered = Mustache.render(t, d);
                $('#content-wrapper').html(rendered);
                setupPills();
                setupViewer('.gallery');
            });
        });

    }

    function setupPills() {
        $('.placebo').on('click', function() {
            var to = $(this).data('to');
            $('html, body').animate({
                scrollTop: $(document.getElementById(to)).offset().top - (3 * rem())
            }, 1000);
        });

        $('.nav-pills').stickUp({
            scrollHide: false,
            lazyHeight: $('#nav-main').height() + (3 * rem())
        });
    }

    function rem() {
        return parseInt($('html').css('font-size'));
    }

    $('#hamburger').on('click', function() {
        $('#content').toggleClass('col-lg-8 col-lg-12');
        $('#side-nav').toggleClass('hidden');
    });

    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-nav .nav-link.active').removeClass('active');
        $(this).addClass('active');
        render($(this).data('section').toLowerCase());
        $.scrollify.update();
    });

    render($('.navbar-nav .nav-link.active').data('section').toLowerCase());
});