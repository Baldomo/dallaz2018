$.scrollify({
    section: '.scrollable',
    updateHash: false,
    overflowScroll: true,
});

$('#learn-more').on('click', (e) => {
    $.scrollify.next();
});