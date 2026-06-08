 const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
 const btnRemove = document.getElementById('btnRemove')

 const iputes = ()=>{
    const elemen =[...document.querySelectorAll("input[type=radio]")];
    let radioSelecionado = elemen.filter((el) => {
        return el.checked;
    }); 
    return radioSelecionado[0]
 }

btnCursoSelecionado.addEventListener("click", () => {
    const rs = iputes()
    if(rs != undefined){
        const cursoTexto = rs.parentNode.textContent;
        alert("Curso selecionado: " + cursoTexto);
    }else{
        alert('seleciona o curso')
        console.log('seleciona o curso')
    }
    
});

btnRemove.addEventListener('click',()=>{
    const rs = iputes();
    if(rs != undefined){
        const remover = rs.parentNode;
        remover.remove();
    }else{
        alert('selecione pra excluir')
        console.log('selecione pra excluir')
    }
});