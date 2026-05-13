const soma = (...valores)=>{
    const resultado =(val)=>{
        let res = 0
        for(v of val)
           res+=v
        return res
    }
    return resultado(valores)
}

console.log(soma(10,5,15))