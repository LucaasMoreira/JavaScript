const pessoa = {
    nome: 'bruna',
    csgnome:function(){
       return this.nome
    },
    setnome:function(el){
        return this.nome = el
    }
}

let p3 = pessoa
p3.nome ='claudio'
//p3['nome']='roberto'

//console.log(p3.csgnome)
console.log(p3.setnome('igor'))