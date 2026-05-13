let SaveAntigo = {
    fase: 5,
    moedas: 10,
    vida: 10,
}

let NovaVida = {
    vida:20,
    velocidade: 100,
}

let Juntar = {...SaveAntigo,...NovaVida}
//se eu colocasse ao contario provavelmente ia vira vida:10
let CopiaSave = {...SaveAntigo}

let Add = {...CopiaSave, vida:40}

console.log(CopiaSave);
console.log(Juntar)
console.log(Add)

