setInterval(function () {
    var now = new Date();
    $("#realtimeclock").html(now.toDateString() + "<br>" + now.toTimeString());
}, 500);