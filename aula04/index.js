let name = 'Creso';
let age = 26;
let overAge = true; 

if (overAge === true) {
    console.log (`O aluno ${name} é maior de idade`);
}

let data = {
    name,
    age,
    overAge
}

console.log(data)

let animals = ['boi', 'vaca', 'cabrito', 'ovelha'];

console.log(animals)

let a = 5;
let b = 1;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b ;

console.log(sum, sub, mult, div);

if (a > b) {
    console.log(`O número ${a} é maior que ${b}.`)
}else {
    console.log(`O número ${b} é maior que ${a}`)
}