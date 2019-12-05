$(function () {

    $("#input-text").focus(function () {
        console.log(111);
        // $(".search-list").css("visibility", "visible", function () {
        //     $(".search-list").slideDown("slow");
        // });
        $(".search-list").slideToggle("slow");
    });

    $("#input-text").blur(function () {
        $(".search-list").slideToggle("slow");
    });

});