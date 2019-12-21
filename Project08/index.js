window.onload = function () {

    // Set Up Canvans

    let canvans = document.getElementById("canvasHere");
    let ctx = canvans.getContext("2d");

    function canvansSetup() {
        if (!canvans.getContext) return;

        // example01();
        // example02();
        example03();
        // example04();
    }

    canvansSetup();

    // Draw Elements

    // function example01() {
    ctx.fillStyle = "rgba(55,175,225,0.5)";
    //     ctx.fillRect(50, 50, 200, 200);
    // }

    function example02() {

        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(50, 250);
        // ctx.lineTo(300, 300);
        // ctx.closePath();
        // // ctx.stroke();
        // ctx.fillStyle = "rgba(55,175,225,0.5)";
        // ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        let cp1x = 0, cp1y = 300;
        let x = 300, y = 300;
        ctx.quadraticCurveTo(cp1x, cp1y, x, y)
        // ctx.closePath();
        ctx.strokeStyle = "rgba(55,175,225,0.5)";
        ctx.stroke();
        // ctx.fill();

        // ctx.beginPath();
        // ctx.moveTo(300, 300);
        // ctx.lineTo(250, 50);
        // ctx.lineTo(0, 0);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.fill();

    }

    function example03() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.fillStyle = 'rgb(15,' + Math.floor(225 - 75 * i * i * 0.03) + ',' + Math.floor(225 - 75 * j * j * 0.03) + ')';
                ctx.fillRect(i * 50, j * 50, 50, 50);
            }
        }
    }

    function example04() {
        // let deg = 360;
        let rad = Math.PI * 2

        ctx.beginPath();
        ctx.arc(150, 150, 100, 0, rad, false);
        // ctx.stroke();
        ctx.fillStyle = "rgba(55,175,225,0.5)";
        ctx.fill();

    }

}