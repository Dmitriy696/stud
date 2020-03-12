//typeof
function a(){}
let type_a = typeof(a);
console.log(type_a);

let arr = [];
let type_arr = typeof(arr);
console.log(type_arr);

let b = false;
let type_b = typeof(b);
console.log(type_b);

let n = null;
let type_n = typeof(n);
console.log(type_n);

let str = 'a';
let type_str = typeof(str);
console.log(type_str);

let un = undefined;
let type_un = typeof(un);
console.log(type_un);

//number
let num1 = 1/0;
console.log(num1);

let num2 = 0/0;
console.log(num2);

let num3 = 4.243;
console.log(num3.toFixed(2));

//Arithmetic operators
let count1 = 10;
console.log(++count1);
console.log(count1);
console.log(count1++);
console.log(count1);

let count2 = 10;
console.log(--count2);
console.log(count2);
console.log(count2--);
console.log(count2);

let x = 10;
let y = 3;
let dvsn = x/y;
console.log(dvsn);
let mult = x*y;
console.log(mult);
let sum = x + y;
console.log(sum);
let subtn = x - y;
console.log(subtn);

let variable = 100;
variable += 25;
console.log(variable);

let anotherVariable = 25;
anotherVariable *= 4;
console.log(anotherVariable);

console.log(5>10);
console.log(5<10);
console.log(8<=10);
console.log(10 === 10);
console.log(10 !== 10);
console.log(10=='10');
console.log(10==='10');

//string
let num = 4;
console.log(`Количество:${num}`);

//boolean
console.log(10=='10');
console.log(10==='10');
console.log(10 === 10);
console.log(10 !== 10);

let number = 5;
console.log(number && 10 + number);

//Null & Undefined
console.log(null == undefined);
console.log(null === undefined);

//symbol
let symbol = Symbol.for("name");
console.log(symbol);

let anotherSymbol = Symbol.for("name");
console.log(symbol === anotherSymbol);

let user = {
    userName: "Tom",
    [Symbol(`password`)]: "qwerty",
}
console.log(user.userName);
let pass = user[Symbol.for(`password`)];
console.log(pass);

//Objects
let person = {
    name: 'Anton',
    age: 20,
    country: 'Ukraine'
}
console.log(person.country);
person.country = 'USA';
console.log(person.country);
delete person.age;
console.log(person);
console.log('x' in person);

