// Birthday party
// Date: 2024-02-21
// Original guest list
var guestList = ["Ali", "Aman", "Shahad"];
// Print an invitation message for each person
for (var i = 0; i < guestList.length; i++) {
    var invitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(invitationMessage);
}
// Announce the guest who can't make it
var guestCantMakeIt = guestList[1]; // Assuming Aman
console.log("".concat(guestCantMakeIt, " can't make it to the dinner."));
// Modify the guest list, replacing the person who can't make it
guestList[1] = "Moiz"; // Replace Aman with Moiz
// Print a second set of invitation messages
console.log("Updated Invitation Messages:");
for (var i = 0; i < guestList.length; i++) {
    var updatedInvitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(updatedInvitationMessage);
}
