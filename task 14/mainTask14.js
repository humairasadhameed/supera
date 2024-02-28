// Conference of inventors
// Date: 2024-02-21
// Create a guest list with at least three people
var guestList = ["Ali", "Aman", "Shahad"];
// Print an invitation message for each person
for (var i = 0; i < guestList.length; i++) {
    var invitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(invitationMessage);
}
