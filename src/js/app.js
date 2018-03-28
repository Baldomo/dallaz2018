$('#learn-more').on('click', (e) => {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $('#nav-main').offset().top
    }, 1000, 'swing');
});