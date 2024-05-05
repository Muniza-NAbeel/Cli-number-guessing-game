#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer Will Generate a Random Number;

// 2) User input for Guessing Number;

// 3) Compare user input With Computer Generated Number;

const randomNumber = Math.floor(Math.random()*10+1);

const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please Guess A Number",
    },
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulation!! You Guess A Right Number");
}

else {
    console.log("Ops You Guess A Wrong Number");
}
