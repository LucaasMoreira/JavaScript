class carros{
    constructor(pname,ptipo){
        this.name =pname
        if(ptipo == 1){
            this.cartype = 'esportivo'
            this.velocidade = 200
            this.pneu = '4x4'
        }else if(ptipo == 2){
            this.cartype = 'militar'
            this.velocidade = 100
        }else if(ptipo == 3){
            this.cartype = 'decada'
            this.velocidade = 60
        }
    }
        getname(){
            return `seu nome é: ${this.name}`
        }
        getcartype(){
            return `tipo de carro: ${this.cartype}`
        }
        getvelocidade(){
            return `velocidade: ${this.velocidade}`
        }

        getarr(){
            return [this.name,this.cartype,this.velocidade]
        }

        getpneu(){
            return 'seu tipo de carro' + this.pneu
        }

        setmudar(name){
            return this.name = name
        }
        //info(){
           // console.log(`nome é: ${this.name}`)
           // console.log(`carro: ${this.cartype}`)
            //console.log(`velocidade: ${this.velocidade}`)
            //console.log(`------------------------------`)
        //}
}


let c1 = new carros('mazda',1)
let c2 = new carros('tank',2)
let c3 = new carros('porche 1991',3)

//console.log(c1.name)
//console.log(c1.cartype)
//console.log(c1.velocidade)

//console.log(c1.getname())
//console.log(c1.getcartype())
//console.log(c1.getvelocidade())
//console.log(c2.getname())
//console.log(c2.getcartype())
//console.log(c2.getvelocidade())

console.log(c1.getarr())
console.log(c1.getarr()[1])
console.log(c2.getarr())
console.log(c3.getarr())
console.log(c1.getpneu())
//caso queira mudar o nome
console.log('---------------------------------------')
c1.setmudar('ferrari')
console.log(c1.getname())


