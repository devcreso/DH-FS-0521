const fs = require('fs')
/*
    Dessa maneira acima, armazenamos nosso json em cache, sendo assim, sempre que chamarmos o arquivo ele virá
    com os mesmos dados da primeira vez mesmo que seja alterado, e também bloqueia para futuras atualizações
    Bom para quando se quer carregar arquivos de configuração que serão utilizados sempre da mesma maneira
    pela aplicação.
*/
const jsonReader = (filePath, cb) => { //essa função auxiliar vai ler e analisar um json passado
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err) {
            return cb && cb(err);
        } try {
            const heroes = JSON.parse(fileData) //JSON.parse é uma função sincrona, se encontra um erro, lançará na tela e se não encontrar poderá travar o programa. Por isso temos que criar um try catch
            return cb && cb(null, heroes)
        } catch (err) {
            return cb && cb(err)
        }
    })
}
/* Leva 3 argumentos, o primeiro é o caminho do arquivo, o segundo é o formato que geralmente
                 será utf-8 e o terceiro é uma função callback de erro que tratára o arquivo caso não consiga
                 ler o mesmo. Os dois argumentos para essa callback function terá como seu primeiro argumento
                 um erro e o segundo serão os dados do arquivo*/
const heroes = jsonReader('./dados.json', (err, data) => { //chamada da função auxiliar
    if (err) {
        console.log(err);
    } else {
        return data
    }
})
console.log (heroes)
// jsonReader('./dados.json', (err, data) => { //chamada da função auxiliar
//     if(err) {
//         console.log(err);
//     } else {
//         data.heroes.push(newHeroe);
//         fs.writeFile('./dados.json', JSON.stringify(data, null, 2), err => {
//             if (err) {
//                 console.log(err);
//             }
//         })
//     }
// })
const newHeroe = {
    name: "Lux",
    baseLife: 420,
    ultimate: "Centelha final",
    category: "Mage"
}

// const jsonWrite = (filePath, data) => {
//     fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
//         if (err) {
//             console.log(err);
//         }
//     })

//     const registerHeroe = (objHero) => {
//         return data.heroes.push(objHero)
//         jsonWrite()
//     }
//primeiro argumento é o caminho do arquivo, caso ele já exista será sobrescrito, o segundo argumento é a string de dados já convertida com o JSON.strigfy() e o terceiro é um callback de erro