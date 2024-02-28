let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the names of each animal
console.log("Animal Names:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("Animal Statements:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a common characteristic statement
console.log("Common Characteristic:");
console.log("They are very adorable");
console.log("Any of these animals would make a great pet!");
