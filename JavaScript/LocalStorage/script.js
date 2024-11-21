let visitas = parseInt(localStorage.getItem("visitas") || 0);
visitas++;
localStorage.setItem("visitas", visitas);
console.log(`Visitas: ${visitas}`);

const usuario = {
    nome: localStorage.getItem('nome') || null
};

function bemvindo() {
    const h4 = document.getElementById('root');
    if (usuario.nome == null) {
        h4.textContent = 'Seja bem-vindo!';
    } else {
        h4.textContent = `Seja bem-vindo, ${usuario.nome}!`;
    }
}

function salvarNome(event) {
    event.preventDefault();
    const nomeUser = document.getElementById("nome").value;
    
    if (nomeUser) {
        localStorage.setItem('nome', nomeUser);
        usuario.nome = nomeUser;
        bemvindo();
    }
}

document.addEventListener('DOMContentLoaded', bemvindo);

const form = document.getElementById('form');
form.addEventListener('submit', salvarNome);
