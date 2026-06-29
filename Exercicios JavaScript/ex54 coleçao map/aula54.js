const di1 = document.querySelector('.d1')
let mapa =new Map()
    mapa.set('caixa1','bola')
    mapa.set('caixa2','guarda-chuva')
    mapa.set('caixa3','bota')
    mapa.delete('caixa2')


    let res = ''
    let pes = 'caixa1'
    //resolver
//if(mapa.has('caixa1')){
    //res = 'tem na caixa'
//}else{
//    res  = 'nao tem na caixa'
//}
//di1.innerHTML = res


if(mapa.has('pes')){
    res = 'tem na caixa' + 'elemento é' + mapa.get('caixa1')
}else{
   res = 'nao tem na caixa'
}
res+= '<br>'+'tem ' + mapa.size + ' '+'elementos'
di1.innerHTML = res
//di1.innerHTML = mapa.get('caixa1')
console.log(mapa)
