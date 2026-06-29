const pesquisarbtn = document.querySelector("#btnPesquisar")
const p_Array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const resultado = document.querySelector('#resultado')

let arr = [10, 20, 30, 40, 23]
p_Array.innerHTML = arr

pesquisarbtn.addEventListener('click', (evt) => {
    const refu = arr.reduce((antes, atual) => {
        return antes + atual
    }) 
    
    console.log(refu)
    resultado.innerHTML = refu
})