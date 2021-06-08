const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

const saudar = (nome, sobrenome, callback) => `Olá, ${callback(nome,sobrenome)}!`;

console.log(saudar('Creso', 'Junior', nomeCompleto))

let numeros = [2, 4, 6, 8];

const frutas = ['uva', 'maca', 'maracuja']

const newDate = new Date();

newDate.setDate(5)
newDate.setMonth(11)
newDate.setFullYear(2022)

console.log(newDate)