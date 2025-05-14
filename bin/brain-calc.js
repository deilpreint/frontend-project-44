#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const runCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(calculate(num1, operator, num2));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runCalcGame;

runCalcGame();