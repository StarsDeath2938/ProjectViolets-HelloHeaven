$(function () {
    $(".content").click(function () {

        $(".content").children().css(
            {
                "color": "#cdcdcd",
                "text-shadow": "0px 0px 2px #dcdcdc;"
            }
        )

        $("body").css(
            "background-color", "#4b4b4b"
        )

        $(".outer").children().css(
            {
                "background-color": "rgba(225, 225, 225, 0.4)",
                "box-shadow": "0px 0px 64px rgba(225, 225, 225, 0.4);"
            }
        )

        $(".inner").children().css(
            {
                "background-color": "rgba(255, 255, 240, 0.4)",
                "box-shadow": "0px 0px 16px rgba(255, 255, 240, 0.4);"
            }
        )
    })
})