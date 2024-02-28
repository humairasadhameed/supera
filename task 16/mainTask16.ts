// Guest List Program
// Author:M.Asad Hamees
// Date:2024-02-21
// Birthday party
// Original guest list
let guestList: string[] = ["Ali", "Aman", "Shahad"];

// Print an invitation message for each person
for (let i = 0; i < guestList.length; i++) {
    let invitationMessage: string = `Dear ${guestList[i]},You are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitationMessage);
}

// Changing Guest List
let guestCantMakeIt: string = guestList[1]; // Assume Aman can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.`);

// Modify the list, replacing the person who can't make it
guestList[1] = "Moiz"; // Replace Aman with Moiz

// Print a second set of invitation messages
console.log("Updated Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    let updatedInvitationMessage: string = `Dear ${guestList[i]},You are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(updatedInvitationMessage);
}

// More Guests
console.log("Good news! Found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList.unshift("Sami");

// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Sajad");

// Use push() to add one new guest to the end of the list
guestList.push("Shabbir");

// Print a new set of invitation messages
console.log("Additional Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    let additionalInvitationMessage: string = `Dear ${guestList[i]},You are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(additionalInvitationMessage);
}
