function* geradora(){
    let res = 0
    while(true){
        res+=1
        yield res
    }
}

let c = geradora()

for(let i = 0; i < 10; i++){
    console.log(c.next().value)
}