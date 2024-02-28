function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("   Please specify items for your sandwich.");
    } else {
        console.log("   Sandwich with:");
        for (let item of items) {
            console.log(`      - ${item}`);
        }
    }
    console.log("please toast the other sandwhich");
}
orderSandwich("olives", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "cheese","Oniones");
orderSandwich(); 
