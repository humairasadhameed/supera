interface Shirt {
    size: string;
    message: string;
}

function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): Shirt {
    return {
        size: size,
        message: message
    };
}
let largeShirt = make_shirt("large");
let mediumShirt = make_shirt('medium'); 
let customShirt = make_shirt('small', 'I love Javascript');
console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
