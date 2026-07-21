class carro{
    constructor(nome,porta){
        this.nome =nome
        this.porta =porta
        this.vel = 0
        this.ligado = false
        this.cor =  undefined
    }
    ligar = function(){
       return this.ligar = true
    }
    desligar = function(){
       return this.ligar = false
    }
    setcor = function(color){
        return this.cor('verde')
    }
}


class militar extends carro{
    constructor(nome, porta , muniçao, blindagem){
        super(nome,porta)
        this.blindagem = blindagem
        this.muniçao = muniçao
        this.setcor = 'verde'
    }
    esvazio = function(){
        if(this.muniçao >=1){
            return this.muniçao--
        }else{
            return console.log('acabou')
        }
    }
}

const c2 = new militar( 'guerra', 2, 50, 100)

esvazio()
esvazio()
esvazio()
ligar()

function servir(){
    console.log(this.nome)
    console.log(this.porta)
    console.log(this.vel)
    console.log(this.cor)
    console.log(this.ligado)
    console.log(this.blindagem)
    console.log(this.muniçao)
}

c2.servir()


//algon esta errado
//duvidas de extends e super
//ver algo passado na aula
