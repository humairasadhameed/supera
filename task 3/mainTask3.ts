let personName: string = "Shabbir";
let LowerCase: string = personName.toLowerCase();
let Uppercase: string = personName.toUpperCase();
let Titlecase: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log("Original Name:", personName);
console.log("Lowercase:", LowerCase);
console.log("Uppercase:", Uppercase);
console.log("Titlecase:", Titlecase);