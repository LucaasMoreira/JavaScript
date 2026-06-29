let id = document.getElementById('di1')
let curso = ['php', 'html', 'css']
let cores = ['azul', 'vermelho', curso]

cores[2].push('c++')
//pop() - remover
//shift() - remover inicio
//unshift() - add antes

console.log(cores[2][1])

cores.map((el)=>{
    const c = document.createElement('p')
    c.setAttribute('class','ph')
    c.innerHTML = el
    id.appendChild(c)
})