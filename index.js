#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Hi Welcome to the word counter");
const question = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Write your sentence here "
});
let wordList = question.sentence.trim().split(" ");
console.log(`Your word count is : ${wordList.length}`);
