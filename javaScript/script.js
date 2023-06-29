function tabuada(){
    let num = window.document.getElementById('num')
    let end = document.getElementById('end')

    /* Aquiestou testando se o valor destro da variavél tenho o tamanho igual a 0 
    que serio o mesmo que vazio neste caso */
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO] Confira os seus dados!')
    } else {
        /* Aqui estou transformando a variável num em um inteiro */
        let n = Number(num.value)
        let e = Number(end.value)
        let x = 0
        let r = ''
    
        let res = window.document.getElementById('resposta')

        res.innerHTML = `A tabuada do ${n} é: <br> `
        do{
            r = n * x
            /* O += está fazendo a função de concatenar */
            res.innerHTML += `${x} X ${n} = ${r}<br>`
            x++
        }while(x <= e)
    }   
}