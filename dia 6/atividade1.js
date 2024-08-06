//Contador utilizando comando for que conta até o número escolhido pelo usuário
let num = prompt("Insira um número inteiro e positivo");
for(let cont = 0; cont<=num; cont++){
    console.log("contador: " + cont);
}

//Contador de 5 em 5
for(let cont = 0;cont<=50; cont+=5){
    console.log("contador: " + cont)
}

//Contador Regressivo
for(let cont = 50; cont>=0;cont-=5){    
    console.log("contador: " + cont)
}