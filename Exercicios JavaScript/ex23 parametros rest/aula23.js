function spre(...valor){
    let tan = valor.length;
    let res = 0;
    for(let i = 0; i < tan; i++){
         res += valor[i]
    };

    return res
}

console.log(spre(10,20,30,40))