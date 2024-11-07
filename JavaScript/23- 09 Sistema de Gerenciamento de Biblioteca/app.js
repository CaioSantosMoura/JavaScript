import { Livro, Biblioteca } from './biblioteca.js';

// cria um objeto da classe Biblioteca
const bibliotecaLivro = new Biblioteca();

// Adiciona os livros
bibliotecaLivro.adicionarLivro(new Livro(1, "Dom Casmurro", "Machado de Assis", "1899", "Romance"));
bibliotecaLivro.adicionarLivro(new Livro(2, "1984", "George Orwell", "1949", "Distopia"));
bibliotecaLivro.adicionarLivro(new Livro(3, "O Senhor dos Anéis", "J.R.R. Tolkien", "1954", "Fantasia"));
bibliotecaLivro.adicionarLivro(new Livro(4, "sdadas", "J.R.R. Tolkien", "2323", "Fantasia"));

// Lista todos os livros
console.log("=== Listando todos os livros ===");
bibliotecaLivro.listarLivro();

// Remove o ultimo livro inserido na lista
console.log("\n=== Removendo o último livro ===");
bibliotecaLivro.removerLivro(4);
bibliotecaLivro.listarLivro();

// Busca o livro pelo titulo
console.log("\n=== Buscando por '1984' ===");
bibliotecaLivro.buscarLivroPorTitulo("1984");

// Edita o livro ja inserido na lista
console.log("\n=== Editando o livro ID 2 ===");
bibliotecaLivro.editarLivro(2, "1984 - Nova Edição", "George Orwell", "1950", "Distopia");
bibliotecaLivro.listarLivro();

// Desafios Extras

// Procura o livro pelo autor
console.log("\n=== Buscando por 'George Orwell' ===");
bibliotecaLivro.buscarLivroPorAutor("George Orwell");

// livros disponiveis para emprestimo
console.log("\n=== Livros disponiveis para emprestimo ===");
bibliotecaLivro.listarLivrosDisponiveis();
console.log();

// Ordenar em ordem crescente
console.log("\n=== Após ordenar em ordem crescente ===");
bibliotecaLivro.listarLivro();

// Ordenar em ordem decrescente
console.log("\n=== Após ordenar em ordem decrescente ===");
bibliotecaLivro.listarLivro();

console.log("\n=== Registrar Empréstimos de Livros ===")
bibliotecaLivro.registrarEmprestimo(1, "Alice", "2024-10-15");
bibliotecaLivro.registrarEmprestimo(3, "Bob", "2024-11-01");

console.log("\n=== Relatorio Emprestimo ===");
bibliotecaLivro.gerarRelatorioEmprestimos();

// Listar livros após empréstimo
bibliotecaLivro.listarLivro();

// Devolver livro
bibliotecaLivro.devolverLivro(1);

// Listar livros após devolução
bibliotecaLivro.listarLivro();