$('.main').onepage_scroll({
    pagination: false,
    loop: false,
    updateURL: false
});

$('#learn-more').on('click', (e) => {
    //e.preventDefault();
    $('main').moveTo(2);
});