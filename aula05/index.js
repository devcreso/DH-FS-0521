let pets = [
    {
        nome: 'Yoshi',
        nomeDono: 'Victor',
        idade: 5,
        tipo: 'Cachorro',
        raca: 'Akita Inu',
        peso: 30,
        genero: 'Macho',
        cor: 'ruivo',
        vacinado: true
    },
    {
        nome: 'Kiara',
        nomeDono: 'Creso',
        idade: 6,
        tipo: 'Cachorro',
        raca: 'Pintcher',
        peso: 5,
        genero: 'Femea',
        cor: 'preta',
        vacinado: true
    },
    {
        nome: 'Nalah',
        nomeDono: 'Francielle',
        idade: 1,
        tipo: 'Gato',
        raca: 'Persa',
        peso: 3,
        genero: 'Femea',
        cor: 'pardo',
        vacinado: true
    }
]
const listarPets = () => {
    pets.forEach(pet => {
        console.log('Nome: ' + pet.nome)
    })
}

const cadastrarPets = (arrayPets, newPet) => {
    if (validaDados(newPet)){
        arrayPets.push(newPet)
    } else {
        console.log('O objeto não tem todas as propriedades necessárias.')
    }
}

let newPet = {
    nome: 'Thor',
    nomeDono: 'Eder',
    idade: 7,
    tipo: 'Cachorro',
    raca: 'Pastor Belga',
    peso: 35,
    genero: 'Macho',
    cor: 'preto',
    vacinado: true
};

const validaDados = (objetoPet) => {
    if(typeof objetoPet == 'object'){
        return (
            objetoPet.nome && 
            objetoPet.nomeDono &&
            objetoPet.idade &&
            objetoPet.tipo &&
            objetoPet.raca &&
            objetoPet.peso &&
            objetoPet.genero &&
            objetoPet.cor &&
            objetoPet.vacinado    
        )
    }
}
cadastrarPets(pets, newPet)

listarPets();