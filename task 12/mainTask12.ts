const nam: string[] = ["Ali", "Hassam", "Shayan", "Dawod"];

const messageTemplate: string = "Hello, {}! Thank you for coming.";

for (const name of nam) {
    const personalizedMessage: string = messageTemplate.replace("{}", nam);
    console.log(personalizedMessage);
}
