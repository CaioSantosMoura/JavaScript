document.getElementById("cepForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const cep = document.getElementById("cep").value;

    const url = `https://viacep.com.br/ws/${cep}/json/`

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Erro ao buscar o CEP")
        }

        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado!")
            return;
        }

        document.getElementById("logradouro").textContent = `Logradouro: ${data.logradouro}`;
        document.getElementById("bairro").textContent = `Bairro: ${data.bairro}`;
        document.getElementById("localidade").textContent = `Cidade: ${data.localidade}`;
        document.getElementById("uf").textContent = `Estado: ${data.uf}`;
    }
    catch (error) {
        alert("Ocorreu um erro:", error.message);
    }
});