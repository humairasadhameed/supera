function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}
let magician_names: string[] = ["Merlin", "Dumble door", "Houdini", "Peter", "Harry potter", "Professor snake"];
let great_magicians: string[] =["Dumble door", "Professor snake", "Harry potter"];
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("Great Magicians:");
show_magicians(great_magicians);
