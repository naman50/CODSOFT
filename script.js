let display = document.getElementById("display");

// Append character to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Handle keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (/\d/.test(key)) {
        appendCharacter(key); // If the key is a number, append it
    } else if (["+", "-", "*", "/", "%"].includes(key)) {
        appendCharacter(key); // If it's an operator, append it
    } else if (key === "Enter") {
        calculateResult(); // Enter key to calculate
    } else if (key === "Backspace") {
        deleteLast(); // Backspace to delete the last character
    } else if (key === "Escape") {
        clearDisplay(); // Escape key to clear the display
    } else if (key === ".") {
        appendCharacter("."); // Allow decimal input
    }
});
