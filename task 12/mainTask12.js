var names = ["Ali", "Hassam", "Shayan", "Dawod"];
var messageTemplate = "Hello, {}! Thank you for coming.";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    var personalizedMessage = messageTemplate.replace("{}", names);
    console.log(personalizedMessage);
}
