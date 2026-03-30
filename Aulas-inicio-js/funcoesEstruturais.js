//Function - bloco de código
//DRY - Dont Repeat Yourself

function imprimirHelloWorld() {
    console.log("Hello, World");
}

imprimirHelloWorld(); //Chamada da função

function somar(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

somar(2, 5);
somar(3, 1);
somar(3.14, 0)

// let i;
// for(i=0; i<=10; i++) {
//     console.log(i);
// }
// console.log(i);

// i = 0;
// while(i <= 5) {
//     console.log(i);
//     i++;
// }

// i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

let idade = 17;
if (idade >= 18) {
    console.log(`${idade} anos é maior de idade`);
} else {
    console.log(`${idade} anos é menor de idade`);
}