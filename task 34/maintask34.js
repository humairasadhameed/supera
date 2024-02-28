var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken', 'hotnspicy'];
// Print the names of each pizza
console.log("Pizza Names:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Print a sentence about each pizza
console.log("Pizza Statements:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza.toLowerCase(), " pizza."));
}
// Print a line about how much you like pizza
console.log("I really really love pizza!");
