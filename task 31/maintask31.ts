let usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John']; // Replace with your array of usernames

if (usernames.length === 1) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
