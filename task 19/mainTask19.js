var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Initial guest list
var dinnerGuests = ["Ali", "Moiz", "Shabeer"];
// Print invitation messages
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
// Someone can't make it
var unableToAttend = dinnerGuests.pop();
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to dinner."));
// Replace with a new guest
dinnerGuests.push("Nawaz");
// Print second set of invitation messages
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
// Bigger dinner table
console.log("Good news! We ordered a bigger dinner table.");
// New guests
dinnerGuests.unshift("Aman"); // Add to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Azan"); // Add to the middle
dinnerGuests.push("Sajad"); // Add to the end
// New set of invitation messages
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
// Shrinking guest list
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests until only two names remain
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print messages to the two remaining guests
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
// Empty the list
dinnerGuests = [];
console.log("Empty guest list:", dinnerGuests);
// Seeing the World
var placesToVisit = ["Tokyo", "Isamabad", "New York", "Saudi arabia", "Marrakech"];
// Print original order
console.log("Original Order:", placesToVisit);
// Print in alphabetical order without modifying the original list
var alphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);
// Print in reverse alphabetical order without modifying the original list
var reverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
// Dinner Guests
console.log("Number of people invited to dinner:", dinnerGuests.length);
//I know there is a error in lines 42,29,17,6 but it works
