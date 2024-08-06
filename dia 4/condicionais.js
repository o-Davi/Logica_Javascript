/* ANOTAÇÕES: o operedor == testa apenas valor, já === testa valor e tipo de variável
ESCOPO var não respeita escopo, diferente do let e const*/

let fome = prompt("Responda 'sim' se estiver com fome ou 'não' caso não esteja"), dinheiro = prompt("Responda 'sim' se tem dinheiro ou 'não' caso não tenha"), resAberto = prompt("Responda 'sim' se tiver algum restaurante aberto ou 'não' caso não tenha");

if (fome == "não" || dinheiro == "não") {
    console.log("Hoje a janta será em casa")
} else if (fome == "sim" && dinheiro == "sim" && resAberto == "não") {
    console.log("Peça um delivery!")
} else if (fome == "sim" && dinheiro == "sim" && resAberto == "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}

