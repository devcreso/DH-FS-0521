// let pets = [
//     {
//         nome: 'Yoshi',
//         nomeDono: 'Victor',
//         idade: 5,
//         tipo: 'Cachorro',
//         raca: 'Akita Inu',
//         peso: 30,
//         genero: 'Macho',
//         cor: 'ruivo',
//         vacinado: true
//     },
//     {
//         nome: 'Kiara',
//         nomeDono: 'Creso',
//         idade: 6,
//         tipo: 'Cachorro',
//         raca: 'Pintcher',
//         peso: 5,
//         genero: 'Femea',
//         cor: 'preta',
//         vacinado: true
//     },
//     {
//         nome: 'Nalah',
//         nomeDono: 'Francielle',
//         idade: 1,
//         tipo: 'Gato',
//         raca: 'Persa',
//         peso: 3,
//         genero: 'Femea',
//         cor: 'pardo',
//         vacinado: true
//     }
// ]
// const listarPets = () => {
//     pets.forEach(pet => {
//         console.log('Nome: ' + pet.nome)
//     })
// }

// const cadastrarPets = (arrayPets, newPet) => {
//     if (validaDados(newPet) && typeof objetoPet == 'object') {
//         arrayPets.push(newPet)
//     }
// }

// let newPet = 5;

// const validaDados = (objetoPet) => {
//         return (
//             objetoPet.nome &&
//             objetoPet.nomeDono &&
//             objetoPet.idade &&
//             objetoPet.tipo &&
//             objetoPet.raca &&
//             objetoPet.peso &&
//             objetoPet.genero &&
//             objetoPet.cor &&
//             objetoPet.vacinado
//         )
// }

// const validaPet = (objetoPet) => {
//     if(typeof objetoPet =='object'){
//         validaDados(objetoPet)
//     }else{
//         return false;
//     }
// }
// cadastrarPets(pets, newPet)
// listarPets()

let pet = [
    {
        nome: 'Trovão',
        nomeDono: 'Danilo',
        idade: 2,
        raca: 'Pit bull',
        peso: 30,
        genero: 'Macho',
        cor: 'preto',
        vacinado: true
    },
    {
        nome: 'Yoshi',
        nomeDono: 'Victor',
        idade: 7,
        tipo: 'cachorro',
        raca: 'Akita Inu',
        peso: 40,
        genero: 'Macho',
        cor: 'ruivo',
        vacinado: true
    }
]

let novoPet = {
    nome: 'Pituco',
    nomeDono: 'Victor',
    idade: 2,
    tipo: 'ave',
    genero: 'Macho',
    cor: 'cinza',
    vacinado: true
};
const listarPets = () => {
    pet.forEach(pet => {
        console.log('Nome: ' + pet.nome)
    });
}
const cadastrarPets = (arrayPets, novoPet) => {
    if (!validarObj(novoPet)) {
        console.log('Objeto inválido')
    } else if (validarObj(novoPet) && !validarDados(novoPet)) {
        console.log('Cadastro incompleto')
    } else {
        arrayPets.push(novoPet);
    }
}

const validarDados = (newObj) => {
    if (validarObj) {
        return (
            newObj.nome &&
            newObj.nomeDono &&
            newObj.idade &&
            newObj.tipo &&
            newObj.raca &&
            newObj.peso &&
            newObj.genero &&
            newObj.cor &&
            newObj.vacinado
        )
    }
}
const validarObj = (newObj) => (typeof newObj == 'object')
console.log(validarObj(novoPet))
cadastrarPets(pet, novoPet)
listarPets()
console.log(typeof novoPet)