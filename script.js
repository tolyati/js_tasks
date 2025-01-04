"use strict"

function reloadPage() {
    location.reload(); 
}

// Level 1.1 



// Task 1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// let num = prompt("Enter any number below:");

// if(num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else console.log("It`s zero, isn`t it?"); 

// Task 2
// Дана строка. Выведите в консоль длину этой строки.

// let str = prompt("Enter any string below:");

// console.log(str.length);

// Task 3
// Дана строка. Выведите в консоль последний символ строки.

// let str = prompt("Enter any string below:");

// console.log(str[str.length - 1]);

// Task 4
// Дано число. Проверьте, четное оно или нет.

// let num = +prompt("Enter any number below:");

// if (num == 0){
//     alert("Ibaniy nol");
// } else if(num % 2 == 0){
//     alert("Чётное");
// } else {
//     alert("Нечётное");
// }

// Task 5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// let word1 = prompt("Enter any string below:");
// let word2 = prompt("Enter any string below:");

// (word1[0] == word2[0]) ? alert("Yes") : alert("No");

// Task 6
// Дано слово. Получите его последнюю букву. 
// Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// let word = prompt("Enter any string below:");

// (word[word.length - 1] != 'ь') ? alert(word[word.length - 1]) : alert(word[word.length - 2]);



// Level 1.2



// Task 1
// Дано число. Выведите в консоль первую цифру этого числа.

// let num = +prompt("Enter any number below:");

// alert(String(num)[0]);

// Task 2
// Дано число. Выведите в консоль последнюю цифру этого числа.

// let num = +prompt("Enter any number below:");

// console.log(String(num)[String(num).length - 1]);

// Task 3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// let num = +prompt("Enter any number below:");

// console.log(Number(String(num)[0]) + Number(String(num)[String(num).length - 1]));

// Task 4
// Дано число. Выведите количество цифр в этом числе.

// let num = +prompt("Enter any number below:");

// alert(String(num).length);

// Task 5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// let num1 = +prompt("Enter any number below:");
// let num2 = +prompt("Enter any number below:");

// (String(num1)[0] == String(num2)[0]) ? alert("Yes") : alert("No");



// Level 1.3



// Task 1 
// Дана строка. Если в этой строке более одного символа, 
// выведите в консоль предпоследний символ этой строки.

// let str = prompt("Enter any string below:");

// if(str.length > 1) {
//     console.log(str[str.length - 2]);
// } else { 
//     alert("Fuck u");
// }

// Task 2 
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// let num1 = +prompt("Enter any number below:");
// let num2 = +prompt("Enter any number below:");

// (num1 % num2 != 0) ? alert("С остатком") : alert("Без остатка");


// Level 1.4


// Task 1 
// 