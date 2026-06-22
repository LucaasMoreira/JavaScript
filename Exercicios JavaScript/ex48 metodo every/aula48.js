const pesquisarbtn = document.querySelector("#btnPesquisar")
const p_Array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const resultado = document.querySelector('#resultado')

let arr = [10,20,30,40,23]
p_Array.innerHTML = arr

pesquisarbtn.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Não encontrado';
    
    arr.every((el, i) => {
        if (el == txt_pesquisar.value) {
            resultado.innerHTML = 'Elemento: ' + el + ' na posição: ' + i;
            return true; 
        }
    });
    alert('foi')
    console.log('foi');
});