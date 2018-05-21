'use strict';

$.scrollify({
    section: '.scrollable',
    updateHash: false,
    overflowScroll: true,
    standardSrollElements: '#nav-main',
});

$('#learn-more').on('click', () => {
    $.scrollify.next();
    this.blur();
});

$('#nav-main').stickUp({
    scrollHide: true
});

function render() {
    $('#content-wrapper').html('');
    var data;
    $.getJSON('../json/luce.json', (d) => {
        data = d;
    });

    $.get('../templates/section.mst', (t) => {
        var rendered = Mustache.render(t, data);
        $('#content-wrapper').html(rendered);
    });
}

$('#hamburger-wrapper').on('click', () => {
    $('#content').toggleClass('col-lg-8');
});

// TODO: fix
$('.nav .nav-link').on('click', () => {
    //alert('lmao');
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});