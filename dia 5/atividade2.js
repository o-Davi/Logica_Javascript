let opcoes = prompt("Qual serviço desejado 'gasolina', 'álcool', 'calibrar'?"), valor;

switch(opcoes){
    case "gasolina":
        valor = prompt("Quanto deseja pagar?")
        console.log("Quantidade de gasolina abastecida: " + valor/5 + "L.")
        break;
    case "álcool":
        valor = prompt("Quanto deseja pagar?")
        console.log("Quantidade de álcool abastecido: " + valor/3 + "L.")
        break;
    case "calibrar":
        console.log("Pneus calibrados com sucesso.")
        break;
    default:
        console.log("Escolha corretamente uma das alternativas 'gasolina', 'álcool', 'calibrar'")
}