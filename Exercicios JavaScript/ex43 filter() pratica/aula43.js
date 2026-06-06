 const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");

btnCursoSelecionado.addEventListener("click", () => {
    // 1. Ele pega todos os inputs do tipo radio e transforma em Array
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];

    // 2. Ele usa o filter para reduzir o Array apenas ao elemento que foi checado
    let radioSelecionado = todosRadios.filter((el) => {
        return el.checked;
    });

    // 3. AQUI ESTÁ O PASSO QUE VOCÊ FALOU! 
    // Como o filter retorna um array, ele pega a posição [0] para extrair o input de dentro do array
    radioSelecionado = radioSelecionado[0];

    // 4. Agora que NÃO É MAIS UM ARRAY (é o input puro), ele navega no DOM
    const cursoTexto = radioSelecionado.parentNode.textContent;
    
    // 5. Exibe o texto final
    alert("Curso selecionado: " + cursoTexto);
});