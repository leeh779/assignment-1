$(document).ready(function () {

    $("body").mousemove(function (e) {
        handleMouseMove(e);
    });

    function handleMouseMove(event) {

        var x = event.pageX;
        var y = event.pageY;

        $("#circle").animate({
            left: x,
            top: y
        }, 1);
    }
});