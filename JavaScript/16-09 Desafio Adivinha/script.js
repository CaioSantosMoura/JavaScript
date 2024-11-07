/* Crie um jogo de adivinhação de números em JavaScript com as seguintes características:

O jogo deve sortear um número aleatório entre 1 e 100.

Solicite o nome do jogador no início do jogo.

Use prompt para pedir os palpites do jogador e alert para fornecer feedback.

O jogo deve informar se o palpite está alto, baixo ou correto.

Conte o número de tentativas que o jogador precisa para acertar.

Ao acertar, mostre uma mensagem de parabéns com o número de tentativas.

Mantenha um ranking dos 10 melhores jogadores (menos tentativas).

Exiba o ranking atualizado após cada jogo. */

/* Crie um jogo de adivinhação de números em JavaScript com as seguintes características:

O jogo deve sortear um número aleatório entre 1 e 100.

Solicite o nome do jogador no início do jogo.

Use prompt para pedir os palpites do jogador e alert para fornecer feedback.

O jogo deve informar se o palpite está alto, baixo ou correto.

Conte o número de tentativas que o jogador precisa para acertar.

Ao acertar, mostre uma mensagem de parabéns com o número de tentativas.

Mantenha um ranking dos 10 melhores jogadores (menos tentativas).

Exiba o ranking atualizado após cada jogo. */
function jogar() {

    const nomeJogador = prompt("Qual é o teu nome?");

    const numeroAleatorio = Math.floor(Math.random() * 100 + 1);
    let tentativas = 0;
    let palpite = 0;

    while (palpite !== numeroAleatorio) {

        palpite = parseInt(prompt("Adivinha o número (entre 1 e 100):"), 10);
        tentativas++;

        if (numeroAleatorio < palpite) {
            alert("O número é menor");
        } else if (numeroAleatorio > palpite) {
            alert("O número é maior");
        } else if (numeroAleatorio == palpite) {
            alert(`Parabéns, ${nomeJogador}! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        }
    }

    const ranking = carregarRanking();
    ranking.push({ nome: nomeJogador, tentativas: tentativas });
    salvarRanking(ranking);

    exibirRanking();
}

function carregarRanking() {
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    return ranking;
}

function salvarRanking(ranking) {
    localStorage.setItem('ranking', JSON.stringify(ranking));
}

function exibirRanking() {
    const ranking = carregarRanking();
    let rankingText = "Ranking dos Melhores Jogadores:\n";
    ranking.sort((a, b) => a.tentativas - b.tentativas);
    ranking.slice(0, 10).forEach((entrada, index) => {
        rankingText += `${index + 1}. ${entrada.nome} - ${entrada.tentativas} tentativas\n`;
    });
    alert(rankingText);
}


jogar();


