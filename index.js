#! user/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
]);
// BMI Calculator:
if (answer) {
    console.log(answer.firstNumber / answer.secondNumber ** 2);
}
else {
    console.log("Kindly select valid number.");
}
;
