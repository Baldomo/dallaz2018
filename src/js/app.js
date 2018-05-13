$.scrollify({
    section: '.scrollable',
    updateHash: false,
    overflowScroll: true,
    standardSrollElements: '#nav-main',
});

$('#learn-more').on('click', (e) => {
    $.scrollify.next();
});

$('#nav-main').stickUp({
    scrollHide: true
});