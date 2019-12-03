$(function () {

    let nav = $(".topNavList");
    let navOffset = $(".topNavList").offset();

    $(window).scroll(function () {

        if ($(window).scrollTop() > navOffset.top - 40) {
            nav.addClass('top-nav-list-hidden');
        }

        else {
            nav.removeClass('top-nav-list-hidden');
        }

    });

})

