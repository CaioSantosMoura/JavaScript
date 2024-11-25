document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const city = document.getElementById('city').value;
    const apiKey = 'SUA_CHAVE_API_AQUI'; // Substitua pela sua chave da API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temperature = data.main.temp;
                document.getElementById('result').textContent = `A temperatura em ${city} é ${temperature}°C.`;
            } else {
                document.getElementById('result').textContent = 'Cidade não encontrada!';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar o clima:', error);
            document.getElementById('result').textContent = 'Erro ao buscar o clima. Tente novamente.';
        });
});