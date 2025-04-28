import readlineSync from 'readline-sync';

const greetUser = () => {
    console.log('Wlcome to the Brain Games!');
    const name = readlineSync.question('May i have you name? ');
    console.log('Hello, ' + name + '!');
};

export default greetUser;

// не работает npm link
// его можно привязать через sudo npm link
// но не удаётся ввести пароль. код на третьем этапе работает
