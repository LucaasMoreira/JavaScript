const addb = document.querySelector("#btn_add")
const res = document.querySelector(".res")

class pessoa{
    constructor(pname,pidade){
        this.nome = pname
        this.idade = pidade
    }
    getnome(){
        return this.nome
    }
    getidade(){
        return this.idade
    }
}
let presultado =[]

let funçaores = ()=>{
    res.innerHTML = ''
    presultado.map((el)=>{
    const cdiv = document.createElement("div")
    cdiv.setAttribute("class","pessoa")
    cdiv.innerHTML = `nome: ${el.getnome()} e idade: ${el.getidade()}` // conteudo que vai tar nela é o parametro
    res.appendChild(cdiv)
    })
}

addb.addEventListener("click",()=>{
    const pnome = document.querySelector("#f_nome")
    const pidade = document.querySelector("#f_idade")
    const ret = new pessoa(pnome.value, pidade.value)    // pq usei o new ele armazena mas e se eu n usase 
    presultado.push(ret)
    pnome.value = ''
    pidade.value = ''
    pnome.focus()
    funçaores()
})



