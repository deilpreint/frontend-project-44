import readlineSync from 'readline-sync';

export default function greetUser() {
    return readlineSync.question('May I have your name? ')
}