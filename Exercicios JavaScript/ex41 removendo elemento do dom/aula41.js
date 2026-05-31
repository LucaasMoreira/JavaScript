const caixa1 = document.getElementById('caixa1')
const curso = ['html', 'css', 'php', 'js']

curso.map((el,pos)=>{
    const novoEle = document.createElement("div")
     novoEle.innerHTML = el
    novoEle.setAttribute('id','c' + pos+1)
    novoEle.setAttribute('class','curso c1')
    

    const btn = document.createElement('img')
    btn.setAttribute('src', '#')
    btn.setAttribute('class', 'btn')
    btn.addEventListener('click', (evt)=>{
        console.log('foi')
    const pegar = evt.target
    caixa1.removeChild(pegar.parentNode)
})
novoEle.appendChild(btn)
caixa1.appendChild(novoEle)
})

