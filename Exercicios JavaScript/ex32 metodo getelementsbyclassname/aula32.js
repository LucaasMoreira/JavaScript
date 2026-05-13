let c1 = [...document.getElementsByClassName('mudar1')]
let c2 = document.getElementsByClassName('mudar2')

console.log(c2)

c1.map((el)=>{
    el.classList.add('destaque')
})