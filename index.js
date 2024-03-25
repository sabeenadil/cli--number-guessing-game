#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to code with Sabeen-cli-num-guessing-game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-5",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You won.");
}
else {
    console.log("Sorry!! You lost");
}
;
