const caixaCursos = document.querySelector("#caixaCursos");
const btn_cursoSelecionado = document.querySelector("#btn_cursoSelecionado");
const btn_removerCurso = document.querySelector("#btn_removerCurso");
const btn_antes = document.querySelector("#adicionar");
const btn_depois = document.querySelector("#addepois");
const nomeCurso = document.querySelector("#nomeCurso");


let indice = 0; 
const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    const selecionado = todosRadios.filter((el) => {
        return el.checked;
    });
    return selecionado[0]; 
};

let indice = 0;

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice); 
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso; 
    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);
    novoElemento.appendChild(comandos);

    return novoElemento;
};


cursos.map((el, chave) => {
   const novoElemento = criarNovoCurso(el); 
    caixaCursos.appendChild(novoElemento);   
    indice++;
});

btn_antes.addEventListener('click', ()=>{
    const rs = radioSelecionado()
    if(rs != undefined){
        if(nomeCurso.value != ''){
            const cursoSelect= rs.parentNode
            const novocurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novocurso,cursoSelect)
        }else{
            alert('nao escolheu')
        }
})


btn_depois.addEventListener('click', ()=>{
    const rs = radioSelecionado()
    if(rs != undefined){
        if(nomeCurso.value != ''){
            const cursoSelect= rs.parentNode
            const novocurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novocurso,cursoSelect.nextSibling)
        }else{
            alert('nao escolheu')
        }
})




btn_cursoSelecionado.addEventListener("click", () => {
    const rs = radioSelecionado();
    if (rs !== undefined) {
        const cursoTexto = rs.parentNode.textContent;
        alert("Curso selecionado: " + cursoTexto);
    } else {
        alert("Selecione um curso!");
    }
});

btn_removerCurso.addEventListener("click", () => {
    const rs = radioSelecionado();
    if (rs !== undefined) {
        const cursoSelecionado = rs.parentNode;
        cursoSelecionado.remove();
        alert("Selecione um curso!");
    }
});
