// Birthday party
// Date: 2024-02-21

// Original guest list
let guestList: string[] = ["Ali", "Aman", "Shahad"];

// Print an invitation message for each person
for (let i = 0; i < guestList.length; i++) {
    let invitationMessage: string = `Dear ${guestList[i]},You are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitationMessage);
}

// Announce the guest who can't make it
let guestCantMakeIt: string = guestList[1] ; // Assuming Aman
console.log(`${guestCantMakeIt} can't make it to the dinner.`);

// Modify the guest list, replacing the person who can't make it
guestList[1] = "Moiz"; // Replace Aman with Moiz

// Print a second set of invitation messages
console.log("Updated Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    let updatedInvitationMessage: string = `Dear ${guestList[i]},You are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(updatedInvitationMessage);
}
