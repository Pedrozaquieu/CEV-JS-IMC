function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / (n2 ** 2)
    res.innerHTML = `<strong>${s.toFixed(1)}<strong>`
    if (s <= 16.9) {
        categoria.innerHTML = 'Muito abaixo do peso'
    }
    else if (s >= 17 && s <= 18.4) {
        categoria.innerHTML = 'Abaixo do peso'
    }
    else if (s >= 18.5 && s <= 24.9) {
        categoria.innerHTML = 'Peso normal'
    }
    else if (s >= 25 && s <= 29.9) {
        categoria.innerHTML = 'Sobre peso'
    }
    else if (s >= 30 && s <= 35.9) {
        categoria.innerHTML = 'Obesidade grau 1'
    }
    else if (s >= 36 && s <= 40) {
        categoria.innerHTML = 'Obesidade grau 2'
    }
    else if (s >= 40) {
        categoria.innerHTML = 'Obesidade grau 3'
    }


}
function limpar() {
    document.getElementById('txtn1').value = '';
    document.getElementById('txtn2').value = '';
    res.innerHTML = ''
    categoria.innerHTML = ''

}

