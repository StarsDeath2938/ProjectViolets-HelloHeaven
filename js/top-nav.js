$(document).ready(function () {
    $(document).scroll(function () {

        let scroll = $("nav").scrollTop();

        if (scroll == 0) {
            alert("test");
        }

    });

});