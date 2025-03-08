function messageChecker() {
    const message = prompt("Enter the message you want to verify:");
    const hasAI = message.includes("AI"), message.includes("Ai"), message.includes("aI");
    const hasFR = message.includes("FR");

    let result;

    if (hasAI && !hasFR) {
        result = `The message '${message}' is fake!`;
    } else if (hasFR) {
        result = `The message '${message}' is legit!`;
    } else {
        result = `The message '${message}' is not yet encoded!`;
    }

    document.getElementById("result").innerHTML = result;
}
