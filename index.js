function redirecionar(pagina) {
    switch (pagina) {
        case 0:
            window.location.href = "index.html";
            break;
        case 1:
            window.location.href = "fundsEletro.html";
            break;
        case 2:
            window.location.href = "logComp.html";
            break;
        case 3:
            window.location.href = "FundsBancDad.html";
            break;
        case 4:
            window.location.href = "FundsRedes.html";
            break;
        case 5:
            window.location.href = "LogProg.html";
            break;
        case 6:
            window.location.href = "FundsTecInf.html";
            break;
    }
}

// ------------ Eletroeletrônica -----------------------------------------------

const res = document.getElementById('res')
const res2 = document.getElementById('res2')

function LeiDeOhm() {
    // pega os valores do html
    const vInput = document.getElementById('tensao');
    const iInput = document.getElementById('corrente');
    const rInput = document.getElementById('resistencia');

    // transforma em número e se não tiver nada escrito, bota como null
    const v = vInput.value === '' ? null : Number(vInput.value);
    const i = iInput.value === '' ? null : Number(iInput.value);
    const r = rInput.value === '' ? null : Number(rInput.value);

    // cria um array chamado "filled" sem o espaço que não foi escrito nada
    const filled = [v, i, r].filter(val => val !== null).length;

    // vê se tem MENOS de dois campos preenchidos
    if (filled < 2) {
        res.textContent = 'Preencha pelo menos 2 campos!';
        return;
    }
    // vê se todos os campos estão preenchidos
    if (filled === 3) {
        res.textContent = 'Deixe um campo vazio para calcular!';
        return;
    }

    // Calcula o valor faltante
    if (v === null && i !== null && r !== null) {
        // Calcula a tensão: V = I × R
        const result = i * r;
        vInput.value = result.toFixed(2);
    }
    else if (i === null && v !== null && r !== null) {
        // Calcula a corrente: I = V / R
        if (r === 0) {
            res.textContent = 'Resistência não pode ser zero!';
            return;
        }
        const result = v / r;
        iInput.value = result.toFixed(2);
    }
    else if (r === null && v !== null && i !== null) {
        // Calcula a resistência: R = V / I
        if (i === 0) {
            res.textContent = 'Corrente não pode ser zero!';
            return;
        }
        const result = v / i;
        rInput.value = result.toFixed(2);
    }
}

function potencia() {
    // pega os valores do html
    const vInput = document.getElementById('tensao2');
    const iInput = document.getElementById('corrente2');
    const rInput = document.getElementById('resistencia2');

    // transforma em número e se não tiver nada escrito, bota como null
    const v = vInput.value === '' ? null : Number(vInput.value);
    const i = iInput.value === '' ? null : Number(iInput.value);
    const r = rInput.value === '' ? null : Number(rInput.value);

    res2.innerHTML = ''

    // checa se tem alguma parte que não tem nada escrito 
    if (v !== null && i !== null && r !== null) {
        const result = (i * i) * r;
        res2.innerHTML = result.toFixed(2);
        return;
    }
    res2.innerHTML = 'Preencha pelo menos 2 campos para calcular!';
}

// ------------ Banco de dados ----------------------------------

const usuarioID = document.getElementById('usuario')
const senhaID = document.getElementById('senha')

let arrLogin = []
function login() {
    const usuario = usuarioID.value
    const senha = senhaID.value
    res.innerHTML = ` `
    if (usuario === '' || senha === '') {
        res.innerHTML += "Preencha todos os requisitos!"
        console.log(arrLogin)       
    } else {
        arrLogin.push(usuario, senha)
        
        console.log(arrLogin)

        res.innerHTML += `dados gravados`
    }
}

/* ---------------- Lógica de programação ------------------------------ */

function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function ordenarBubble() {
    let res = document.getElementById('res')
    let n = 10
    let min = 1, max = 20
    let arr = []
    res.innerHTML = ` `

    for (let i = 0; i < n; i++) {
        arr.push(gerarAleatorio(min, max))
    }

    console.log(arr)

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    res.innerHTML += `Array Ordenado: ${arr} `
    console.log(arr)
}

function soma_arr(){
    let res = document.getElementById('res2')
    let min = 1, max = 220
    let n = 10
    let soma = 0 
    let arr = []
    res.innerHTML = ` `

    for (let i = 0; i < n; i++) {
        arr.push(gerarAleatorio(min, max))
        soma += arr[i] 
    }

    console.log(arr)
    console.log(soma)
    res.innerHTML += `array: ${arr} </br> soma dos elementos: ${soma} `

}

function matriz3x3() {
    let res = document.getElementById('res3')

    let mat = []
    let n = 3, min = 1, max = 20

    for (let i = 0; i < n; i++) {
        mat[i] = []
        for (let j = 0; j < n; j++) {
            mat[i][j] = gerarAleatorio(min, max)
        }
    }

    console.table(mat)

    res.innerHTML = ""

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res.innerHTML += `${mat[i][j]} `
        }
        res.innerHTML += "<br>"
    }
}


function calculoImc() {
    let res = document.getElementById('res4')
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let imc = 0

    res.innerHTML = ` `

    imc = peso / (altura * altura)

    res.innerHTML += `imc = ${imc} `


}

function temperatura(){
    let res = document.getElementById('res5')
    let F = Number(document.getElementById('C').value)
    let C = Number(document.getElementById('F').value)
    res.innerHTML = ``
    
    if(F === 0 && C > 0){
        F = (C * 9 / 5) + 32
        res.innerHTML += ` temperatura convertida em fahrenheit: ${F.toFixed(2)}`

    }else if(C === 0){
        C = (F - 32) * 5 / 9
        res.innerHTML += ` temperatura convertida em celsius: ${C.toFixed(2)}`

    }
}

function ordenarNum() {
    let res = document.getElementById('res3')

    let arrC = []
    let arrD = []

    for (let i = 1; i <= 20; i++) {
        arrC.push(i)
    }

    for (let i = 20; i >= 1; i--) {
        arrD.push(i)
    }
    res.innerHTML = ` `

    res.innerHTML += ` crescente: ${arrC} </br> decrescente: ${arrD}`
}


