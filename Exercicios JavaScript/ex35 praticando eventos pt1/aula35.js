const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const TodosCurso = [...document.querySelectorAll('.curso')]

TodosCurso.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso= evt.target;
        curso.classList.toggle('destaque')
    })
})

btn.addEventListener('click',()=>{
    const CursoSe = [...document.getElementsByClassName('destaque')]
    CursoSe.map((el)=>{
        caixa2.appendChild(el)
    })
})