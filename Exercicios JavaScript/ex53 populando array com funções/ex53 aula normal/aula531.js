const arr = [10,20,30]

const contas = [
    (el)=>{
        let val = 0
        for(v of el){
            val+= v
        }
        return val
    },
     (el)=>{
        let val = 0
        for(v of el){
            val-= v
        }
        return val
    }
]

console.log(contas[0](arr))
console.log(contas[1](arr))