//Contador que exibe taduada do número selecionado e dos dois seguintes
let num = parseInt(prompt("Insira o número para saber a tabuada"));
for (let cont3 = num; cont3 <= num + 2; cont3++){
    console.log("Tabuada do número: " + cont3)
    for (let cont = 0; cont <= 5; cont++){
        console.log(cont3 + " x " + cont + " = " + (cont3*cont));
    }
}
