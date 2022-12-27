// document nav는 이제 쓰지 않는다.
$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('#gnb').toggleClass('on')
    })
}) 