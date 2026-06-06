const arr= [12,2,45,65,14,17,31]

arr.filter((el)=>{
    if(el >= 18){
        console.log('maior' + el)
    }
})

arr.filter((el)=>{
    if(el <= 18){
        console.log('menor' + el)
    }
})