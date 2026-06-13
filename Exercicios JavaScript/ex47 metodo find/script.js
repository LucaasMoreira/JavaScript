const p_Array = document.querySelector('#array')
const btnPesquisar = document.querySelector('#btnPesquisar')
const txt_pesquisar = document.querySelector('#array')
const resultado = document.querySelector('#resultado')

const arrele = [10,20,4,7,13,44,8,99,2]
p_Array.innerHTML = '['+ arrele + ']'

btnPesquisar.addEventListener('click',(evt)=>{
    arrele.find((el,i)=>{
       if(txt_pesquisar.value != undefined){
        
        if(el == txt_pesquisar.value){
            resultado.innerHTML = 'ele' + el + 'pos' + i
            return el
        }
       }else{
        alert('digite')
       }
    })
})