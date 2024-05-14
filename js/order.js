$(function () {
    computeTotal();
    $(".selectitem").on("change", function () { //each time the select item changes value, we recompute the info
        computeTotal();
    });
});

function computeTotal() {
    /* Grab values from elements and store in array for further processing */
    var itemNameArray = []; // initialise empty array for item names
    var priceArray = []; // initialise empty array for prices
    var qtyArray = []; // initialise empty array for qty
    var selectedQty = 0; // used to test if any qty>0 has been selected
    $(".itemname").each(function () { // we grab the values of each of the item's name from the itemname class into an array
        itemNameArray.push($(this).text());
    });
    $(".price").each(function () { // we grab the values of each of the item's price from the price class into an array
        priceArray.push(parseFloat($(this).text()));
    });
    $(".selectitem option:selected").each(function () { // we grab the values of each of the item selected qty from the selectitem class into an array
        qtyArray.push(parseFloat($(this).val()));
        selectedQty += parseFloat($(this).val()); // increase qty selected
    });

    
}
