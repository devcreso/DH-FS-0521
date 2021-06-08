const fs = require('fs')
//-------------Desafio

//Instruções: Baixe o arquivo da que o professor irá te passar. 

/*
Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal 
o NOME de todos os pets. 
(utilizar o foreach)

Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no 
terminal o NOMEDONO de todos os pets.  (Usar for of)

Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um 
parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)

Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve 
retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade 
deve ser "DataCadastro". (Usar Object Date e MAP)

Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber 
como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)

Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá receber como 
parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  
(aplicar a função ListaDadosPet utilizada como callback)


*/
const petsJson = require('./dados.json')
// fs.readFile('./dados.json', 'utf-8', (err, jsonString) => {
//   if (err) {
//     console.log(err)
//   }else{
//     const pets = JSON.parse(jsonString);
//   }
// })
//desafio 1
const listarPets = () => {
  petsJson.pets.forEach(pet => {
    let { nome } = pet
    console.log(`Nome: ${nome}`)
  });
}
//desafio 2
const listarNomeDonoPets = () => {
  for (let dono of pets) {
    console.log(`${dono.nomeDono}`)
  }
}
//desafio 3
const listarTipo = (tipo) => {
  let arrayPetsTipo = petsJson.pets.filter(pet => {
    return pet.tipo == tipo
  })
  return arrayPetsTipo
}
//desafio 4
const dataDeCadastro = () => {
  let dataCadastro = petsJson.pets.map((objPet) =>
    objPet['DataCadastro'] = new Date()
  )
  atulizarJson()
  return dataCadastro;
}
//desafio 5
const listarDadosPet = (objPet) => {
  const { nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado } = objPet;
  return console.log(
    `Nome: ${nome}
Nome do dono: ${nomeDono}
Idade: ${idade}
Tipo: ${tipo}
Raça: ${raca}
Peso: ${peso}
Genero: ${genero}
Cor: ${cor}
Está vacinado? ${vacinado}`
  )
}
//desafio 6
const listarDadosDoPet = (arrPet, callback) => {
  arrPet.forEach(callback)
}

const cadastrarPet = (objPet) => {
  petsJson.pets.push(objPet)
  atulizarJson()
}

petNovo = {
  nome: 'Oi',
  nomeDono: 'Tchau',
  idade: 12,
  tipo: 'cachorro',
  raca: 'pastor',
  peso: 12,
  genero: 'macho',
  cor: 'preto',
  vacinado: true
}
const atulizarJson = () => {
  fs.writeFileSync('./dados.json', JSON.stringify(petsJson, null, 2), err => {
    if (err) {
      console.log(err)
    }
  })
}

cadastrarPet(petNovo)
// console.log(listarDadosDoPet(pets, listarDadosPet))