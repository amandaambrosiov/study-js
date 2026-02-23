// PILHA DE CHAMADAS ----------------------------------------------------

// function funcao1() {
//     funcao2();
//     console.log('executou a função 1')
// }

// function funcao2() {
//     funcao3();
//     console.log('executou a função 2')
// }

// function funcao3() {
//     console.log('executou a função 3')
// }

// funcao1();

// TIPOS PRIMITIVOS -------------------------------------------------

// console.log(typeof true); //Boolean
// console.log(typeof Boolean(true)); //Boolean
// console.log(typeof new Boolean(true)); //Object
// console.log(typeof (new Boolean(true)).valueOf()); //Boolean
// console.log(typeof 'Amanda'); //string
// console.log(typeof 21); //number
// console.log('Amanda'.length);

// let doze = new Number(12);
// let quinze = doze + 3;
// console.log(quinze);

// console.log(typeof doze); //object
// console.log(typeof quinze); //number

// TIPOS DE VALORES E TIPOS DE REFERENCIAS  ------------------------------

// let x = 10;
// let y = x;
// x = 20;

// console.log(x, y); //20 10

// let x =  {valor: 10 };
// let y = x;
// x.valor = 20;

// console.log(x, y); //20 20

// COERÇÃO (IMPLICITO, EXPLICITO E CHAMADA DE METODOS) ----------------

// COERÇÃO
// console.log('5' - 5);
// console.log('5' + 5);
// console.log(true + 1);
// console.log(true + true);
// console.log([] + {});
// console.log([] + []);

// IMPLICITO 
// console.log(+'5');
// console.log(5 + '');
// console.log(123 && 'oi');
// console.log( null || true);

// EXPLICITO
// console.log(Number('50'));
// console.log(String(50));

// == e === -----------------------------------------------------

// console.log(3 == '3');

// console.log(3 === 3);

// ESCOPO -------------------------------------------------------

// var nome = "Amanda";

// function teste() {
//     var variavel = "meu nome";
//     function teste2() {
//         variavel = "meu nome";
//     }
// } //erro 

// teste();

// var a = 0;

// function alterar() {
//     a = 10;
// }

// console.log(a);
// alterar();
// console.log(a);

// EXPRESSÃO E DECLARAÇÃO 

console.log(1 + 1);
console.log(Math.random() + 5); //expressão

function expressao () {
    return 1 + 1;
}

console.log(expressao());

var variavel = 20;

if (true) {
    variavel = 30;
}

function soma (a) {
    return a + 10;
}

console.log(Math.random());