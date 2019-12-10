$(function () {

    $("#background").height($(window).height());

    $(window).resize(function () {
        $("#background").height($(window).height());

    });
});