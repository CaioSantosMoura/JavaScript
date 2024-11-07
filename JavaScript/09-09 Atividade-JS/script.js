// 1 - Verificar se um número é positivo, negativo ou zero.
let numero = 5;

if (numero == 0) {
    console.log("Zero");
}
else if (numero > 0) {
    console.log("Positivo");
}
else {
    console.log("Negativo");
}


/* 2 - Calcular a média de 3 notas e mostrar a situação do aluno 
 (aprovado (maior igual a 7), reprovado (<2,5) ou em exame). */

let nota1 = 5;
let nota2 = 10;
let nota3 = 6;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado!");
} else if (media < 2.5) {
    console.log("Reprovado");
} else {
    console.log("Em exame");
}


// 3 - Mostrar os múltiplos de 3 entre 1 e 30.

for (let i = 1; i < 31; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 4 - Calcular o fatorial de um número.
let i, fatorial = 1;
let numeroFatorial = 5;
for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}
console.log("Fatorial do Número " + numero + " é: " + fatorial);


// 5 - Verificar se um ano é bissexto.

function bissexto(ano) {
    return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
}

console.log(bissexto(2024));
console.log(bissexto(1900));
console.log(bissexto(2000));
console.log(bissexto(2023));

// 6 - Converter uma temperatura em Celsius para Fahrenheit.

let celsius = 12
fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

// 7 - Verificar se uma palavra é um palíndromo.

let palindromo = "natan";

// 8- Encontrar o maior número em um array.

let maiorNumero = [1, 2, 3, 4, 5, 102, 7, 8, 9, 10];
let maior = maiorNumero[0];

for (let i = 1; i < maiorNumero.length; i++) {
    if (maiorNumero[i] > maior) {
        maior = maiorNumero[i];
    }
}
console.log(maior);

/* 9 - Dado um array de 10 números inteiros, escreva um programa em JavaScript que ordene os 
elementos do array em ordem crescente utilizando o algoritmo Bubble Sort. 
Apresente o array ordenado no console. */

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let numeros = [64, 34, 25, 12, 22, 11, 90, 45, 29, 77];
console.log("Array original:", numeros);
let ordenado = bubbleSort(numeros);
console.log("Array ordenado:", ordenado);

// 10 - Crie uma função de declaração chamada adicionar que recebe dois números como parâmetros e retorna a soma deles.
function adicionar(a, b) {
    return a + b;
}

console.log(adicionar(1, 5));

// 11 - Crie uma função de expressão chamada subtrair que retorne a diferença entredois números.
function subtrair(a, b) {
    return a - b;
}

console.log(subtrair(6, 2));

// 12 - Crie uma arrow function que retorna o produto de dois números.
const produto = (a, b) => a * b;

console.log(produto(5, 5));

/* 13 - Crie uma função chamada ehPar que recebe um número como parâmetro e 
retorna true se o número for par e false caso contrário. */
function ehPar(a) {
    if (a % 2 == 0) {
        return true;
    }
    return false;
}

console.log(ehPar(6));

/* 14 - Crie uma função chamada calcularMedia que recebe um array de números como parâmetro e
retorna a média dos números. console.log(calcularMedia([1, 2, 3, 4, 5])); // 3 */

function calcularMedia(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));

// 15 - Crie uma arrow function que aceite uma string e retorne a mesma string em letras maiúsculas.

let palavraMinuscula = "caio dos santos moura";

console.log(palavraMinuscula.toUpperCase());

/* 16 - Crie uma função que aceite dois parâmetros: um array de números e um número. 
A função deve retornar um novo array com todos os números maiores que o número fornecido.
// Exemplo de uso:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(array, num)); // [6, 7, 8, 9] */

function filtrarNumeros(array, num) {
    return array.filter(elemento => elemento > num);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(array, num));


/* 17 - Crie uma função que aceite um array e um valor. 
A função deve retornar a quantidade de vezes que o valor aparece no array.
// Exemplo de uso:
let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;
console.log(contarOcorrencias(array, valor)); // 4 */

function contarOcorrencias(array1, valor) {
    let contador = 0; // Inicializa o contador
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === valor) {
            contador++;
        }
    }
    return contador;
}

// Exemplo de uso:
let array1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;
console.log(contarOcorrencias(array1, valor));

/* 18 - Crie uma função que aceite uma string e retorne o número de vogais nessa string.
// Exemplo de uso:
let texto = "Exemplo de uma string qualquer";
console.log(contarVogais(texto)); // 10 */

function contarVogais(texto) {
    texto = texto.toLowerCase();
    let soma = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
            soma++;
        }
    }
    return soma;
}

console.log(contarVogais("Caio moura"));

/* 19 - Crie uma função que aceite um número e retorne um array com todos os
números de 1 até o número fornecido, incluindo o número fornecido.
// Exemplo de uso:
let numero = 5;
console.log(criarArray(numero)); // [1, 2, 3, 4, 5] */

function criarArray(numeroArray) {
    let resultado = [];
    for (let i = 1; i <= numeroArray; i++) {
        resultado.push(i);
    }
    return resultado;
}

let numeroArray = 5;
console.log(criarArray(numeroArray));

/* 20 - Crie um objeto chamado carro com propriedades: marca, modelo e ano.
Acesse a propriedade marca do objeto carro.
Altere a propriedade ano do objeto carro para 2025.
Adicione um método ao objeto carro chamado getIdade que retorne quantos anos o carro
tem (ano atual - ano do carro).
Adicione um método ao objeto carro chamado getDescricao que retorne uma string
contendo todas as informações do carro. */

carro = {
    marca: "Ferrari",
    modelo: "125 Sport",
    ano: 1947,

    getIdade: function () {
        let anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    },

    getDescricao: function () {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
};

console.log("Marca do carro:", carro.marca);
console.log("Idade do carro:", carro.getIdade());
console.log("Descrição do carro:", carro.getDescricao());

// 21 - Crie uma função para retornar um número aleatório entre 1 e 100.

function random(aleatorio) {
    let numeroAleatorio = Math.floor(Math.random() * 100);

    return numeroAleatorio;
}

console.log(random());

// 22 - Crie uma função que retorne a diferença em dias entre duas datas.

function diferencaDatas(diaA, diaB) {
    const umDia = 1000 * 60 * 60 * 24; // Milissegundos em um dia
    const dataA = new Date(diaA);
    const dataB = new Date(diaB);

    // Diferença em dias
    return Math.abs((dataB - dataA) / umDia);
}

const data1 = "2024-09-01";
const data2 = "2024-09-16";
console.log(diferencaDatas(data1, data2));  // 15 dias


// 23 - Crie um objeto Date e defina a data para 100 dias a partir de agora.

let dataAtual = new Date();

dataAtual.setDate(dataAtual.getDate() + 100);

console.log(dataAtual);

/* 24 - Crie um objeto "conta" que represente uma conta bancária. Ele deve conter
propriedades como "saldo" e "titular" e métodos para "depositar", "sacar" e "verSaldo". */

conta = {
    saldo: 1000,
    titular: "Caio dos Santos Moura",

    depositar(valor) {
        if (valor > 0) {
            this.saldo = + valor;
            console.log(`Depósito de R$${valor} realizado com sucesso`)
        } else {
            console.log("Valor inválido para deposito")
        }
    },

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de saque inválido ou saldo insuficiente.");
        }
    },

    verSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
        return this.saldo;
    }
};

conta.verSaldo();
conta.depositar(500);

conta.verSaldo();
conta.sacar(300);

conta.verSaldo();
conta.sacar(1500);

conta.depositar(-100);

// 25 - Crie um array chamado "frutas" que contém "maçã", "banana" e "laranja". //
let frutas = ["maçã", "banana", "laranja"];

// Imprima o segundo elemento do array "frutas".
console.log(frutas[1]);

// Adicione "manga" ao final do array "frutas".
frutas.push("manga");

// Remova o primeiro elemento do array "frutas".
frutas.shift();

// Verifique o tamanho do array "frutas".
console.log(frutas.length);

// Crie um loop for que percorre o array "frutas" e imprime cada fruta.
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Use o método forEach para imprimir cada elemento do array "frutas".
frutas.forEach(fruta => console.log(fruta));

// Use o método map para criar um novo array que contém o tamanho de cada fruta do array "frutas".
let tamanhosFrutas1 = frutas.map(fruta => fruta.length);
console.log(tamanhosFrutas1);

// Use o método filter para criar um novo array que contém apenas as frutas do array "frutas"
let tamanhosFrutas2 = frutas.map(fruta => fruta.length);
console.log(tamanhosFrutas2);

// que têm mais de 5 caracteres.
let frutasGrandes = frutas.filter(fruta => fruta.length > 5);
console.log(frutasGrandes);

// Use o método reduce para calcular a soma dos números em um array.
let numeros1 = [1, 2, 3, 4, 5];
let soma = numeros1.reduce((total, numero) => total + numero, 0);
console.log(soma); // 15