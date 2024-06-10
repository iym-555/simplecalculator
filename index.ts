#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponential"]
    },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
  let sum = answer.firstNumber + answer.secondNumber; 
  console.log(`Your answer is ${sum}`);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
  let subtract = answer.firstNumber - answer.secondNumber;
  console.log(`Your answer is ${subtract}`);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
  let multiply = answer.firstNumber * answer.secondNumber;
  console.log(`Your answer is ${multiply}`);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
  let divide = answer.firstNumber / answer.secondNumber;
  console.log(`Your answer is ${divide}`);
} else if (answer.operator === "Modulus"){
    console.log(answer.firstNumber % answer.secondNumber);
    let modulus = answer.firstNumber % answer.secondNumber;
    console.log(`Your answer is ${modulus}`);
} else if (answer.operator === "Exponential"){
    console.log(answer.firstNumber ^ answer.secondNumber);
    let exponential = answer.firstNumber ^ answer.secondNumber;
    console.log(`Your answer is ${exponential}`);
} else {
  console.log("Please select a valid operator")
};
