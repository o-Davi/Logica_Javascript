let nome = prompt('Insira seu nome'), idade= parseInt(prompt('Insira sua idade')), altura= parseFloat
(prompt('Insira sua altura')), peso= parseFloat(prompt('Insira seu peso')), anoNascimento, imc;

anoNascimento = 2023-idade;
imc = peso/(altura*altura);

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNascimento + ", tem " + altura + ' de altura, pesa '+peso+ 'Kg e seu IMC é de '+imc+'Kg/m2' );

/*prompt serve para interagir com usuário inicalmente
let entradaDoUsuario = parseInt(prompt());
parseint convert para inteiro ignorando decimais
number converte considerando as casas decimais
console.log(2023 + entradaDoUsuario);
*/

