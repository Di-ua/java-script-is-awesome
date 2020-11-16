// const shouldRenew = confirm("Хотите продлить подписку?");
// const userInput = prompt("Введите Ваше имя");
// console.log(userInput);

// console.log(5 < 2); //false

// const value = "555";
// const number = Number(value);
// console.log(typeof number);

// const value = "qweqeqwq";
// const number = Number(value);
// console.log(number);

// Парс числа
// const blockWidth = "300px";
// const width = Number.parseInt(blockWidth);
// console.log(width);

// const blockWidth = "300.5px";
// const width = Number.parseFloat(blockWidth);
// console.log(width);

// const superValue = "qwerty";

// const userInput = prompt("Введи то, что надо");
// console.log("userInput before: ", userInput);

// const normalizeInput = userInput.toLowerCase();
// console.log("userInput after: ", userInput);
// console.log("normalizedInput: ", normalizeInput);

// console.log(superValue === userInput);

// Алгоритм
// 1 - создать цикл, который просит пользователя ввести число
// 2 - если ввели null остановить
// 3 - если ввели не null преобразовать в число и добавить к total
// 4 - после цикла вывести общую сумму введенных чмсел

do {
    let input = prompt("введи число");
    if (input === null) {
        break;
    }
    input = Number(input);
    total += input;
}

console.log(`Jбщая сумма ${total}` )