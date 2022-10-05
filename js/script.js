// let sum = (a = 10, b = 15) => {
//     return a + b;
// }
// let a = 99;
// let b = 45;
//
// const ask = ['18'];
// console.log(`сума = ${ask/sum(a, b)}`);                  //інтерполяція, новий стандарт
// console.log("сума = " + ask/sum(a, b) + " new_text");    //конкатенація
//.........................................................................
// console.log("5" + "5");         //конкатенація, = "55"
// console.log(5 + "5");           //конкатенація, = "55"
// console.log(5 + 5);             //додавання, = 10
// console.log(5 + +"5");          //додавання, = 10, знак "+" (унарний плюс) перед рядком робить цей рядок числом
// console.log(5 + 5 + "5");       //додавання + конкатенація , 5 + 5 = 10, 10 + "5" = "105"
// console.log("5" + 5 + 5);       //конкатенація, = "555"
// console.log(+"5" + 5 + 5);      //додавання, = 15
//................................................................
// Префіксна  - змінює та виводить нове значення
// Постфіксна - спочатку використовує старе значення, а потім змінює
//
// let i = 10,
//     d = 10;
//
// i++;                //постфіксна інкремента
// d--;                //постфіксна декремента
//
// console.log(i);      //11
// console.log(d);      //9
//..............................................................
// let i = 10,
//     d = 10;
//
// console.log(i++);      //постфіксна інкремента 10
// console.log(d--);      //постфіксна декремента 10
//..............................................................
// let i = 10,
//     d = 10;
//
// console.log(i++);      //постфіксна інкремента 10
// console.log(d--);      //постфіксна декремента 10
//..............................................................
// let i = 10,
//     d = 10;
//
// console.log(++i);      //префіксна інкремента 11
// console.log(--d);      //префіксна декремента 9
//..............................................................
// let i = 10,
//     d = 10;
//
// i++;                //префіксна інкремента
// d--;                //префіксна декремента
//
// console.log(++i);      //префіксна інкремента 12
// console.log(--d);      //префіксна декремента 8
//..............................................................
// console.log(5%2); // 1, (2 + 2) + 1
// console.log(6%2); // 0, (2 + 2 + 2) + 0    // остача від ділення
// console.log(9%6); // 3, (6) + 3
//...............................................................
// console.log(5 * 2 == 10); //true
// console.log(5 * 2 === 10); // true
// console.log(5 * 2 == '10'); //true
// console.log(5 * 2 === '10'); // false, different types
// console.log(5 * 2 === 10); // true, same types


//................................................................
// console.log(5/0); // Infinity
// console.log(-5/0); // - Infinity
// console.log('5'/0); // Infinity
// console.log('-5'/0); // - Infinity
// console.log('Oleg'/0); // NaN
// console.log('-Oleg'/0); // NaN
// console.log(5/'5'); // 1
// console.log(-5/'5'); // - 1
// console.log('5'/'5'); // 1
// console.log('-5'/'5'); // - 1
// console.log('Oleg'/'5'); // NaN
// console.log('-Oleg'/'5'); // NaN
// .......................................................
// console.log('Oleg' == "Oleg"); // true   "", '', `` all the same
// console.log('Oleg' === "Oleg"); // true
// console.log('Oleg' == `Oleg`); // true
// console.log('Oleg' === `Oleg`); // true
// .........................................................
// console.log(0 == null); // false       null is not number 0
// console.log('0' == null); // false     null is an object
// console.log(typeof(null)); // object
// console.log(null); // 'null'
// console.log(0); // 0
// .........................................................
// let i;
// console.log(i); // undefined
// console.log(i/5); // NaN
// console.log(i/0); // NaN
// .........................................................
// console.log(typeof(NaN)); // 'number'             typeof return 'string'
// console.log(typeof(undefined)); // 'undefined'
// console.log(typeof(Infinity)); // 'number'
// console.log(typeof(-Infinity)); // 'number'
// console.log(typeof('5')); // 'string'
// console.log(typeof(+'5')); // 'number'
// console.log(typeof(5)); // 'number'
// ...........................................................
// let a = []; // array (also object)
// let b = {};
// let c = '';
// let d = 5;
// let e = false;
// let f = '';
// console.log(typeof(a)); // 'object'
// console.log(typeof(b)); // 'object'
// console.log(typeof(c)); // 'string'
// console.log(typeof(d)); // 'number'
// console.log(typeof(e)); // 'boolean'
// ...........................................................
// let a = 5,
//     b = 5,
//     c = 10;
// console.log(a == 5 && b == 5); // true
// console.log(a == 5 || b == 5); // true
// console.log(a == 5 && b == 10); // false
// console.log(a == 5 || c == 10); // true
// console.log(a == 5 && b != 10); // true
// console.log(a == 5 && c != 10); // false
// console.log(a == 5 || c != 10); // true
// ...........................................................

