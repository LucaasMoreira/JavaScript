let id1 = document.getElementById("aoba")
let Id2 = document.getElementById("aoba2")

//console.log(id1.id)
//console.log(id1.innerHTML)]
let criararray = [id1,Id2]

// for(d of criararray )
//     d.innerHTML = 'curso'

criararray.map((el)=>{
    el.innerHTML = 'cursos'
})