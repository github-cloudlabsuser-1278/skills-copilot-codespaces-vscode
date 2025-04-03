// Function to perform the calculator operations
function calculator() {
    console.log("Welcome to the Calculator!");

    while (true) {
        console.log("\nSelect an operation:");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Exit");

        // Prompt the user to select an operation
        const choice = prompt("Enter your choice (1/2/3/4/5):");

        if (choice === "5") {
            console.log("Exiting the calculator. Goodbye!");
            break;
        }

        // Validate the choice
        if (!["1", "2", "3", "4"].includes(choice)) {
            console.log("Invalid choice. Please select a valid operation.");
            continue;
        }

        // Get the input numbers
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter numeric values.");
            continue;
        }

        // Perform the selected operation
        let result;
        switch (choice) {
            case "1":
                result = num1 + num2;
                console.log(`The result of addition is: ${result}`);
                break;
            case "2":
                result = num1 - num2;
                console.log(`The result of subtraction is: ${result}`);
                break;
            case "3":
                result = num1 * num2;
                console.log(`The result of multiplication is: ${result}`);
                break;
            case "4":
                if (num2 === 0) {
                    console.log("Error! Division by zero is not allowed.");
                } else {
                    result = num1 / num2;
                    console.log(`The result of division is: ${result}`);
                }
                break;
        }
    }
}

// Run the calculator
calculator();