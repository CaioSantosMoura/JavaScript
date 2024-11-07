export class Livro {
    constructor(id, titulo, autor, data, genero) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.data = data;
        this.genero = genero;
        this.disponibilidade = id % 2 !== 0;
        this.emprestadoPara = null;
        this.dataDevolucao = null;
    }
}

export class Biblioteca {
    constructor() {
        this.livro = [];
    }

    adicionarLivro(livro) {
        this.livro.push(livro);
    }

    removerLivro(id) {
        this.livro = this.livro.filter(livro => livro.id !== id);
        console.log(`O livro com id ${id} foi removido`);
    }

    listarLivro() {
        if (this.livro.length === 0) {
            console.log("Nenhum livro no catálogo.");
            return;
        }

        console.log("Catalogo de Livros");
        this.livro.forEach((livro) => {
            console.log(`ID: ${livro.id}, Livro: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.data}, Gênero: ${livro.genero}, Disponibilidade: ${livro.disponibilidade}`);
        });
    }

    buscarLivroPorTitulo(titulo) {
        const livroEncontrado = this.livro.find(livro =>
            livro.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (livroEncontrado) {
            console.log(`Livro encontrado: ${livroEncontrado.titulo}, Autor: ${livroEncontrado.autor}`);
            return livroEncontrado;
        } else {
            console.log("Livro não encontrado.");
            return null;
        }
    }

    buscarLivroPorAutor(autor) {
        const livroEncontrado = this.livro.find(livro =>
            livro.autor.toLowerCase() === autor.toLowerCase()
        );

        if (livroEncontrado) {
            console.log(`Livro encontrado: ${livroEncontrado.titulo}, Autor: ${livroEncontrado.autor}`);
            return livroEncontrado;
        } else {
            console.log("Livro não encontrado.");
            return null;
        }
    }

    editarLivro(id, novoTitulo, novoAutor, novaData, novoGenero) {
        const livro = this.livro.find(livro => livro.id === id);

        if (livro) {
            livro.titulo = novoTitulo || livro.titulo;
            livro.autor = novoAutor || livro.autor;
            livro.data = novaData || livro.data;
            livro.genero = novoGenero || livro.genero;
            console.log(`Livro ID: ${id} foi atualizado.`);
        } else {
            console.log("Livro não encontrado para edição.");
        }
    }

    listarLivrosDisponiveis() {
        const livrosDisponiveis = this.livro.filter(livro => livro.disponibilidade === true);

        if (livrosDisponiveis.length === 0) {
            console.log("Nenhum livro disponivel.");
            return;
        }

        console.log("Livros disponíveis:");
        livrosDisponiveis.forEach((livro) => {
            console.log(`${livro.id} - Livro: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.data}, Gênero: ${livro.genero}`);
        });
    }

    ordenarLivrosPorAno(ordenacao) {
        if (ordenacao === 'crescente') {
            this.livro.sort((a, b) => a.ano - b.ano);
        } else if (ordenacao === 'decrescente') {
            this.livro.sort((a, b) => b.ano - a.ano);
        } else {
            console.log("Ordenação inválida. Use 'crescente' ou 'decrescente'.");
            return;
        }
        console.log(`Livros ordenados em ordem ${ordenacao}.`);
    }

    registrarEmprestimo(id, nomePessoa, dataDevolucao) {
        const livro = this.livro.find(livro => livro.id === id);

        if (!livro) {
            console.log("Livro não encontrado.");
            return;
        }

        if (!livro.disponibilidade) {
            console.log(`O livro "${livro.titulo}" não está disponível para empréstimo.`);
            return;
        }

        livro.disponibilidade = false;
        livro.emprestadoPara = nomePessoa;
        livro.dataDevolucao = dataDevolucao;
        console.log(`O livro "${livro.titulo}" foi emprestado para ${nomePessoa}. Devolução em: ${dataDevolucao}.`);
    }

    devolverLivro(id) {
        const livro = this.livro.find(livro => livro.id === id);

        if (!livro) {
            console.log("Livro não encontrado.");
            return;
        }

        if (livro.disponibilidade) {
            console.log(`O livro "${livro.titulo}" já está disponível.`);
            return;
        }

        livro.disponibilidade = true;
        console.log(`O livro "${livro.titulo}" foi devolvido com sucesso.`);
        livro.emprestadoPara = null;
        livro.dataDevolucao = null;
    }

    gerarRelatorioEmprestimos() {
        const emprestimos = this.livros.filter(livro => livro.dataEmprestimo);

        if (emprestimos.length === 0) {
            console.log("Nenhum empréstimo realizado.");
            return;
        }

        console.log("Relatório de Empréstimos:");
        emprestimos.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Emprestado para: ${livro.emprestadoPara}, Data do Empréstimo: ${livro.dataEmprestimo.toLocaleDateString()}, Data de Devolução: ${livro.dataDevolucao}`);
        });
    }
}