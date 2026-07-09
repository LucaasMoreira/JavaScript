const put = document.querySelector('.put')

const rapaz =new Set(['nome', 'idade', 'altura'])

rapaz.add("esporte")
//rapaz.delet()
//rapaz.clear()


//put.ForEach(el){
  //  put.innerHTML = el
//}
for(let m of rapaz){
put.innerHTML += m + "<br>"
}

