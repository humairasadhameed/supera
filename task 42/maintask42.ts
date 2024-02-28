function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}
let magician_names: string[] = ["Merlin", "Dumble door", "Houdini", "Peter", "Harry potter"];
let great_magicians: string[] = make_great(magician_names);
show_magicians(great_magicians);
