let nome = "João";
const sobrenome = "Jales";

let templateString = `O meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

let A = 1;
let B = 5.56;
let C = 3.14;
const pi = 3.14;
let potencia = A ** C;
console.log(typeof A);
console.log(typeof C);
console.log(`${A}^${C}=${potencia}`);

//Boolean
let verdaderio = true;
let falso = false;
console.log(typeof verdaderio);

//Operadores Lógicos
let E = verdaderio && falso;
let Ou = verdaderio && falso;
console.log(E);
console.log(Ou);

let maior_que = B > A; //Outros: >=, <, <=, ==, !=
console.log(`${B} > ${A} = ${maior_que}`);

//Arrays
let numeros = [1, 3.14, -7, 99, 505.67];
console.log(`numeros[0]=${numeros[0]}`);
console.log(`numeros[3]=${numeros[3]}`);

//Object
let pessoa = {
    nome: 'João',
    cpf: 123,
    telefone: 6199584582
};
console.log(pessoa);
console.log(`pessoa.nome = ${pessoa.nome}`);