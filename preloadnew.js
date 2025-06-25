// Этот сценарий на чистом JavaScript
window.onload = function () {
document.body.classList.add('loaded_hiding');
window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
}, 500);
}

// Но его можно написать с использованием библиотеки jQuery.
// $(window).on('load', function () {
// $('body').addClass('loaded_hiding');
// window.setTimeout(function () {
//     $('body').addClass('loaded');
//     $('body').removeClass('loaded_hiding');
// }, 500);
// }
