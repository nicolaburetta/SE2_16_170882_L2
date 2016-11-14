var limit = 30;

function insertItems() {
    document.getElementById("order-name").style.display = "block";
    document.getElementById("order-quantity").style.display = "block";
    document.getElementById("order-button").style.display = "block";
}

function hideElements() {
    document.getElementById("input-order-name").value = "";
    document.getElementById("input-order-quantity").value = "";
    document.getElementById("order-name").style.display = "none";
    document.getElementById("order-quantity").style.display = "none";
    document.getElementById("order-button").style.display = "none";
    
    console.log("Place order elements are now hidden.");
}

function placeOrder() {
	var itemName = document.getElementById("input-order-name");
    var itemQuantity = document.getElementById("input-order-quantity");
    
    if (isNaN(itemQuantity.value) || (!isNaN(itemQuantity.value) && itemQuantity.value <= 0)) {
        itemQuantity.select();
        itemQuantity.focus();
        alert("Current item-quantity box value: " + itemQuantity.value + "\nReplace it with a positive number!");
    } else {

        var columnIndex = itemNameAlreadyExists(itemName.value);
        if (columnIndex == -1) {
            var row0 = document.getElementById("row-item");
            var row1 = document.getElementById("row-quantity");
            var newCell0 = row0.insertCell(columnIndex);
            var newCell1 = row1.insertCell(columnIndex);
            newCell0.innerHTML = itemName.value;
            newCell1.innerHTML = itemQuantity.value;

            console.log("New column insert for the item " + itemName.value + "; quantity = " + itemQuantity.value);
        } else {
            table.rows[1].cells[columnIndex].innerHTML = itemQuantity.value;

            console.log("Quantity for the item " + itemName.value + " updated to " + itemQuantity.value);
        }

        hideElements();
    }
}

// return a number >= 0 if itemName already exists, -1 otherwise.
function itemNameAlreadyExists(itemName) {
    var table = document.getElementById("table");
    var columns = table.rows[0].cells.length;
    var check = false;
    var index = 0;
    
    while (!check && index < columns) {
        check = (table.rows[0].cells[index].innerHTML == itemName);
        index++;
    }
    
    if (!check) {
        return -1;
    } else {
        return index - 1;
    }
}

function updateLimit() {
    var inputLimit = document.getElementById("input-limit");
    
    if (isNaN(inputLimit.value) || inputLimit.value < 0) {
        inputLimit.select();
        inputLimit.focus();
        alert("Current limit box value: " + inputLimit.value + "\nReplace it with a positive number!");
    } else {
        
        limit = inputLimit.value;
        document.getElementById("limit").innerHTML = "Limit: " + limit;
        inputLimit.value = "";
        
        console.log("Limit updated to: " + limit);
    }
}

function checkLimit() {
    var table = document.getElementById("table");
    var total = 0;
    
    for (var i = 0; i < table.rows[1].cells.length; i++) {
        total += parseInt(table.rows[1].cells[i].innerHTML);
    }
    
    if (total > limit) {
        alert("Attention!\nThe limit has been exceeded.");
    }
}