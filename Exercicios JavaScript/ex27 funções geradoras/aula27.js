function* nome(){
    let l = 0
    while(true){
       yield l++
    }
    
}

let res = nome()
for(let i = 0; i <= 10; i++ ){
    console.log(res.next().value)
}