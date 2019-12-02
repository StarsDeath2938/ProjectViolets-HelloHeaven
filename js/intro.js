$(document).ready(function () {
    $("#intro").height($(window).height());

    $(window).resize(function () {
        $("#intro").height($(window).height());
    })
});