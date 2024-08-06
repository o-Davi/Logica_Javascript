//Desafio - Cauculadora Dodev
let num1 = Number(prompt("Insira um número")),operador = prompt("Digite a operação desejada '+' para somar, '-' para diminuir, '*' para multiplicar, '/' para dividir"), 
num2 = Number(prompt("Insira um número")), resultado;

//Comando switch funciona de modo que caso a operação escolhida seja uma das predefinidas, realiza o processamento esperado.
switch(operador){
    case "+" :
        resultado = num1 + num2
        break;
    case "-":
        resultado = num1 - num2
        break;
    case "*":
        resultado = num1 * num2
        break;
    case "/":
        resultado = num1 / num2
        break;
        
    //Defalt funciona parecido como um else, caso nenhuma case acima seja verdadeiro ele é executado.
    default:
        console.log("Digite o operador corretamente")
}

console.log("Resultado: " + resultado);
