// Carne - 400 Gramas por pessoa  + de 6 Horas - 650 Gramas
// Cerveja - 1200 ML por pessoa  + de 6 Horas - 2000 ML
// Refrigerante/Água - 1000 ML por pessoa + de 6 Horas - 1500 ML
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("criancas");
let inputDuração = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCrianças.value;
    let duracao = inputDuração.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    
    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
    resultado.innerHTML += `<div><img src="./Assets/Carne.png"/><p>${qtdTotalCarne/1000} KG de Carne</p></div>`
    resultado.innerHTML += `<div><img src="./Assets/Cerveja.png"/><p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p></div>`
    resultado.innerHTML += `<div><img src="./Assets/Bebida.png"/><p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas de Bebidas</p></div>`

}