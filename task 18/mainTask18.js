var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Faisalbad", "New York", "Islamabad", "Marrakech"];
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
