$(function () {
    computeTotal();
    $(".selectitem").on("change", function () { //each time the select item changes value, we recompute the info
        computeTotal();
    });
});