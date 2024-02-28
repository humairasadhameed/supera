var animals = ['Dog', 'Cat', 'Rabbit'];
// Print the names of each animal
console.log("Animal Names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log("Animal Statements:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a common characteristic statement
console.log("Common Characteristic:");
console.log("They are very adorable");
console.log("Any of these animals would make a great pet!");
