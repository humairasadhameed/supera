function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    return {
        size: size,
        message: message
    };
}
var largeShirt = make_shirt("large");
var mediumShirt = make_shirt('medium');
var customShirt = make_shirt('small', 'I love Javascript');
console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
