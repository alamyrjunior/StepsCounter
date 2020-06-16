function contar()
{
var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passos = document.querySelector('#passos')
var caminhada = Number(inicio.value)
var res = document.querySelector('#res')
if(inicio.value.length == 0|| fim.value.length == 0||passos.value.length ==0){
res.innerHTML = 'Impossível contar'
} else{
    res.innerHTML = 'Contando: <br> '
    let i = Number(inicio.value)
    let f = Number(fim.value) 
    let p = Number(passos.value)

    if(p <= 0){
        window.alert('Passo inválido, considerando passo 1')
        p = 1
    }

    if(i < f){
        for(c = i;c <= f;c += p){
            res.innerHTML += `${c} \u{27A1}`
    }
}else {
        for(c= i;c >= f;c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
 
    
   
}
res.innerHTML += `\u{1F6A9}`
}
