$('.hero__button').click(function() {
    $('.modal').fadeIn();
});

$('.modal__content-btn').click(function() {
    $('.modal').fadeOut();
});

$(document).mouseup(function (e) {
    let modalContent = $('.modal-content');
    if (e.target!=modalContent[0]&&modalContent.has(e.target).length === 0){
        $('.modal').fadeOut();
    }
});

$('.portfolio__gallery-item').click(function() {
    $('.modalPictures').fadeIn();
});

$('.modal-btn').click(function() {
    $('.modalPictures').fadeOut();
});

$(document).mouseup(function (e) {
    let modalImage = $('.modal-image');
    if (e.target!=modalImage[0]&&modalImage.has(e.target).length === 0){
        $('.modalPictures').fadeOut();
    }
});