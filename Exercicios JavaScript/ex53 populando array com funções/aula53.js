const res1 = document.querySelector('.res1')
const res2 = document.querySelector('.res2')
const res3 = document.querySelector('.res3')
const but1 = document.querySelector('.b1')
const but2 = document.querySelector('.b2')


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

 but1.addEventListener("click",()=>{
   let numeros = [Number(res1.value),Number(res2.value)]
   const rt =contas[0](numeros)
    res3.innerHTML = rt
 })


 but2.addEventListener("click",()=>{
  let numeros = [Number(res1.value),Number(res2.value)]
   const rt = contas[0](numeros)
   res3.innerHTML = rt
   
 })