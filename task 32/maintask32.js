var current_users = ["John", "Alice", "Bob", "Charlie", "Eve"]; // Replace with your current usernames
var new_users = ["Bob", "Eve", "Mallory", "Trudy", "Dave"]; // Replace with your new usernames
var _loop_1 = function (new_username) {
    // Check if the new username is already in use (case-insensitive)
    if (current_users.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); })) {
        console.log("Sorry, the username '".concat(new_username, "' is not available. Please choose a different one."));
    }
    else {
        console.log("Great! The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
