//------------Callback
function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
  };
  
  function saudar(nome, sobrenome, callback) {
    return 'Olá ' + callback(nome, sobrenome)+'!';
  };
  
  console.log(saudar('João', 'Neves', nomeCompleto))

  //-------------------- Metodos de arrays
//map(), find(),filter(),reduce(),forEach()
var numeros = [2, 4, 6,8];
var dobroNumeros = numeros.map(function(numero){
	// Multiplicamos por 2 cada número
return numero * 3;
});

console.log(dobroNumeros);

//exemplo find
var frutas = ['Uva', 'Maçã', 'Cereja', 'Morango', 'Abacaxi'];

var moraNoMar = frutas.find(function(fruta){
	return fruta == 'Abacaxi';
});
console.log(moraNoMar);

//Exemplo filter 
var frutas2 = ['Uva', 'Maçã', 'Cereja', 'Morango', 'Abacaxi'];

var maiores = frutas2.filter(function(fruta){
	return fruta == 'Maçã'  ;
});

//exemplo foreach e for/of
var paises = ['Argentina', 'Brasil', 'Colombia'];
paises.forEach(function(pais){
	console.log(pais);
});

for (let pais of paises){
    console.log(pais)
}

//Objeto Date
let dataAgora = new Date();
console.log("Retorna o dia: " +dataAgora.getDate() )
console.log("Retorna o mês: " +dataAgora.getMonth())
console.log("Retorna o dia da semana: "+dataAgora.getDay() )
console.log("Retorna o ano: "+dataAgora.getFullYear() )
dataAgora.setDate(5)
 console.log(dataAgora)
// Desestruturando arrays
let array = ['Roxo','Azul','Amarelo']
let [cor1,...total] = array
console.log(total)

// Desestruturando objetos
let pessoa = {nome: 'Laura', idade: 31, faltas: 3};
let {nome, faltas} = pessoa;
console.log(nome,faltas)
console.log(pessoa.nome, pessoa.faltas)
//Spread
//O operador spread pode ser usado em qualquer elemento iterável. 
//Permite-nos copiar e mover dados de um lugar para outro de forma eficiente.
//Spread Operator Array
let clubesUm = ['Boca', 'Palmeiras', 'Barcelona'];
let clubesDois = ['River', 'Santos', 'Inter Milan'];
let todosOsClubes = [...clubesUm,...clubesDois];
console.log(todosOsClubes)
//Spread Operator Objetos

let carro = {marca:'Ferrari', kms:0, ano:2019};
let pilotoUm = {nome:'Vettel', idade:32, ...carro};
let pilotoDois = {nome:'Leclerc', idade:21, ...carro};
console.log(pilotoUm)

