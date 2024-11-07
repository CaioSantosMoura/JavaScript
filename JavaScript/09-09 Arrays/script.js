// Inicializa um array com os valores "Maça" e "Banana"
let frutas = ["Maçã", "Banana"];
console.log(frutas); // Imprime: ["Maça", "Banana"]

// Adiciona "Laranja" e "Uva" ao final do array com o método .push()
frutas.push("Laranja", "Uva");
console.log(frutas); // Imprime: ["Maça", "Banana", "Laranja", "Uva"]

// Remove o último item do array com o método .pop() e armazena o valor removido em ultimaFruta
let ultimaFruta = frutas.pop();
console.log(frutas); // Imprime: ["Maça", "Banana", "Laranja"]
console.log(ultimaFruta); // Imprime: "Uva" (a última fruta removida)

// Adiciona "Pêra" e "Abacaxi" no início do array com o método .unshift()
frutas.unshift("Pêra", "Abacaxi");
console.log(frutas); // Imprime: ["Pêra", "Abacaxi", "Maça", "Banana", "Laranja"]

// Remove o primeiro item do array com o método .shift() e armazena o valor removido em primeiraFruta
let primeiraFruta = frutas.shift();
console.log(frutas); // Imprime: ["Abacaxi", "Maça", "Banana", "Laranja"]
console.log(primeiraFruta); // Imprime: "Pêra" (a primeira fruta removida)

// Substitui o item no índice 1 ("Maça") por "Manga" usando o método .splice()
frutas.splice(1, 1, "Manga");
console.log(frutas); // Imprime: ["Abacaxi", "Manga", "Banana", "Laranja"]

// Cria um novo array frutas2 e concatena com frutas usando o método .concat()
let frutas2 = ["Kiwi", "Abacate"];
frutas = frutas.concat(frutas2);
console.log(frutas); // Imprime: ["Abacaxi", "Manga", "Banana", "Laranja", "Kiwi", "Abacate"]

// Itera sobre o array frutas com o método .forEach(), imprimindo o índice e o item
frutas.forEach(function (item, indice) {
    console.log(indice, item); // Imprime o índice e a fruta correspondente
});

// Usa o método .map() para criar um novo array frutas3, copiando cada elemento de frutas
let frutas3 = frutas.map(function (fruta) {
    return fruta; // Retorna cada fruta sem modificações
});
console.log(frutas3); // Imprime: ["Abacaxi", "Manga", "Banana", "Laranja", "Kiwi", "Abacate"]

// Usa o método .filter() para criar um novo array frutas4, incluindo apenas as frutas com 4 letras
let frutas4 = frutas.filter(function(fruta) {
    return fruta.length === 4; // Retorna apenas as frutas que têm exatamente 4 caracteres
});
console.log(frutas4); // Imprime: ["Kiwi"]

// Usa o método .find() para encontrar o primeiro item do array com 7 letras
let frutas5 = frutas.find(function(fruta){
    return fruta.length === 7; // Retorna a primeira fruta com exatamente 7 caracteres
});
console.log(frutas5); // Imprime: "Abacaxi" (a primeira fruta com 7 letras)

// Usa o método .findIndex() para encontrar o índice do primeiro item com 7 letras
let frutas6 = frutas.findIndex(function(fruta){
    return fruta.length === 7; // Retorna o índice da primeira fruta com exatamente 7 caracteres
});
console.log(frutas6); // Imprime: 0 (índice de "Abacaxi" no array)

// Usa o método .every() para verificar se todas as frutas têm exatamente 7 letras
let frutas7 = frutas.every(function(fruta){
    return fruta.length === 7; // Retorna true apenas se todas as frutas tiverem 7 caracteres
});
console.log(frutas7); // Imprime: false (nem todas as frutas têm 7 letras)

// Usa o método .some() para verificar se há pelo menos uma fruta com 7 letras
let frutas8 = frutas.some(function(fruta){
    return fruta.length === 7; // Retorna true se pelo menos uma fruta tiver exatamente 7 caracteres
});
console.log(frutas8); // Imprime: true (pois há frutas com 7 letras, como "Abacaxi")


console.log(frutas); 
// Usa o método .sort() para ordenar as frutas em ordem alfabética
frutas.sort();
console.log(frutas); // Imprime: ["Abacate", "Abacaxi", "Banana", "Kiwi", "Laranja", "Manga"]


console.log(frutas); 
// Usa o método .reverse() para inverter a ordem dos itens no array
frutas.reverse();
console.log(frutas); // Imprime: ["Manga", "Laranja", "Kiwi", "Banana", "Abacaxi", "Abacate"]

// Usa o método .join() para unir todos os itens do array em uma única string, separados por ", "
let stringFrutas = frutas.join(", ");
console.log(stringFrutas); // Imprime: "Manga, Laranja, Kiwi, Banana, Abacaxi, Abacate"

// Usa o método .slice() para copiar uma parte do array, do índice 1 ao 3 (o índice final 4 não é incluído)
let citricos = frutas.slice(1, 4);
console.log(citricos); // Imprime: ["Laranja", "Kiwi", "Banana"]

// Usa o método .includes() para verificar se o array contém o item "Laranja"
let incluiBanana = frutas.includes("Laranja");
console.log(incluiBanana); // Imprime: true (pois "Laranja" está presente no array)
