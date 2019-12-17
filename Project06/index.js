$(function () {
    $(".sticky-nav").children("div").mouseenter(function () {
        $(this).children("div").css({ "display": "block" });
    });

    $(".sticky-nav").children("div").mouseleave(function () {
        $(this).children("div").css({ "display": "none" });
    });
});