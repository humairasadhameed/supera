function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + " the Great"; });
}
var magician_names = ["Merlin", "Dumble door", "Houdini", "Peter", "Harry potter", "Professor snake"];
var great_magicians = ["Dumble door", "Professor snake", "Harry potter"];
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("Great Magicians:");
show_magicians(great_magicians);
