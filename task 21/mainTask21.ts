// Creator: M.Asad Hameed
// Date: 2024-02-21

// Create objects containing items
let item1: { name: string, quantity: number, category: string, price : number } = {
    name: "Laptop",
    quantity: 85,
    price: 120000,
    category: "Electronics"
};

let item2: { name: string, quantity: number, category: string, price : number } = {
    name: "Notebook",
    quantity: 2000,
    price: 100,
    category: "Stationery"
};

let item3: { name: string, quantity: number, category: string, price : number } = {
    name: "Running Shoes",
    quantity: 150,
    price: 150,
    category: "Footwear"
};

// Print information about each item
console.log("Item 1:", item1.name, "Dell 7 Generation", item1.quantity, "in stock - Category:", item1.category, "price:", item1.price);
console.log("Item 2:", item2.name, "Notebook", item2.quantity, "in stock - Category:", item2.category, "price:", item2.price);
console.log("Item 3:", item3.name, "Bata Shoes", item3.quantity, "in stock - Category:", item3.category, "price:", item3.price);
