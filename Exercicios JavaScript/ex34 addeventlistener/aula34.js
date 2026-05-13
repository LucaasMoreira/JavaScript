const TodosCurso = [...document.querySelectorAll('.curso')]

TodosCurso.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso= evt.target;
        curso.classList.add('destaque')
    })
})