$.scrollify({
    section: '.scrollable',
    updateHash: false,
});

$('#learn-more').on('click', (e) => {
    $.scrollify.next();
});