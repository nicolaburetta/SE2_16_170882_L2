function insertItems() {
    document.getElementById("order-name").style.display = "block";
    document.getElementById("order-quantity").style.display = "block";
    document.getElementById("order-button").style.display = "block";
}

function placeOrder() {
	var itemName = document.getElementById("input-order-name");
    var itemQuantity = document.getElementById("input-order-quantity");
    
    if (isNaN(itemQuantity.value) || (!isNaN(itemQuantity.value) && itemQuantity.value <= 0)) {
        itemQuantity.select();
        itemQuantity.focus();
        alert("Current item-quantity box value: " + itemQuantity.value + "\nReplace it with a positive number!");
    }
    
    var c = itemNameAlreadyExists(itemName.value);
}

function itemNameAlreadyExists(itemName) {
    var table = document.getElementById("table");
    var check = false;
    var index = -1;
    
    while (!check && index < table.rows[0].cells.length) {
        index++;
        check = (table.rows[0].cells[index].innerHTML == itemName);
    }
    
    return check;
}