function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("   Please specify items for your sandwich.");
    }
    else {
        console.log("   Sandwich with:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("      - ".concat(item));
        }
    }
    console.log("please toast the other sandwhich");
}
orderSandwich("olives", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "cheese", "Oniones");
orderSandwich();
