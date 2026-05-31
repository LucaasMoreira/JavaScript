const caixa1 = document.getElementById('caixa1')
const curso = ['html', 'css', 'php', 'js']


curso.map((el,pos)=>{
    const novoEle = document.createElement("div")
    novoEle.setAttribute('id','c' + pos+1)
    novoEle.setAttribute('class','curso c1')
    novoEle.innerHTML = el
    caixa1.appendChild(novoEle)
})


