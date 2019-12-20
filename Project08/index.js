window.onload = function () {

    // Set Up Canvans

    let canvans = document.getElementById("tutorial");
    let ctx = canvans.getContext("2d");

    function canvansSetup() {
        if (!canvans.getContext) return;

        example01();
        example02();
    }

    canvansSetup();

    // Draw Elements

    function example01() {
        ctx.fillStyle = "rgba(55,175,225,0.5)";
        ctx.fillRect(50, 50, 200, 200);
    }

    function example02() {

        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(50, 250);
        // ctx.lineTo(300, 300);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        let cp1x = 0, cp1y = 300;
        let x = 300, y = 300;
        ctx.quadraticCurveTo(cp1x, cp1y, x, y)
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(300, 300);
        ctx.lineTo(250, 50);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

    }

}