let f = function(...spre){
    let res = 0
    for(v of spre){
        res += v
    }

    return res
}

console.log(f(10,20))