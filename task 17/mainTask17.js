// Guest List Program
// Author: Your Name
// Date: 2024-02-21
// Original guest list
var guestList = ["Ali", "Aman", "Shahad"];
// Print an invitation message for each person
for (var i = 0; i < guestList.length; i++) {
    var invitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(invitationMessage);
}
// Changing Guest List
var guestCantMakeIt = guestList[1]; // Assume Aman can't make it
console.log("".concat(guestCantMakeIt, " can't make it to the dinner."));
// Modify the list, replacing the person who can't make it
guestList[1] = "Moiz"; // Replace Aman with Moiz
// Print a second set of invitation messages
console.log("Updated Invitation Messages:");
for (var i = 0; i < guestList.length; i++) {
    var updatedInvitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(updatedInvitationMessage);
}
// More Guests
console.log("Good news! Found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList.unshift("Shabeer");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "sajad");
// Use push() to add one new guest to the end of the list
guestList.push("Sami");
// Print a new set of invitation messages
console.log("Additional Invitation Messages:");
for (var i = 0; i < guestList.length; i++) {
    var additionalInvitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(additionalInvitationMessage);
}
// Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time. Can invite only two people for dinner.\n");
// Remove guests until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to the two remaining people
for (var i = 0; i < guestList.length; i++) {
    var finalInvitationMessage = "Dear ".concat(guestList[i], ",You are still invited to dinner. We look forward to seeing you.");
    console.log(finalInvitationMessage);
}
// Remove the last two names from the list
guestList = [];
console.log("Current Guest List:", guestList);
