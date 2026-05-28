const curso = [...document.querySelectorAll('.curso')]
const caixa1 = document.getElementById('caixa1')

caixa1.addEventListener('click',(evt)=>{
    console.log('clicou')
})

curso.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
    })
})