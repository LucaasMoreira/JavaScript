const soma =(...valores)=>{
    const resultado = val => {
        let res = 0
        for(elemento of val){
            res+=elemento
            return res
        }
    }
    return resultado(valores)
}

console.log(soma(10,20,30) + ' ' + typeof(soma))