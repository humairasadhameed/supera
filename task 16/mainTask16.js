// Guest List Program
// Author:M.Asad Hamees
// Date:2024-02-21
// Birthday party
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
guestList.unshift("Azan");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Shabeer");
// Use push() to add one new guest to the end of the list
guestList.push("Shabbir");
// Print a new set of invitation messages
console.log("Additional Invitation Messages:");
for (var i = 0; i < guestList.length; i++) {
    var additionalInvitationMessage = "Dear ".concat(guestList[i], ",You are cordially invited to dinner. It would be an honor to have you join us.");
    console.log(additionalInvitationMessage);
}
