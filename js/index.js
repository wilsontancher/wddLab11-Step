setInterval(function () {
    var now = new Date();
    $("#realtimeclockj").html(now.toDateString() + "<br>" + now.toTimeString());
}, 500);