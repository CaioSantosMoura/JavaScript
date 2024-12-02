document
   .getElementById("climaForm")
   .addEventListener("submit", async (event) => {
      event.preventDefault();

      const cidade = document.getElementById("cidade").value;
      const apiKey = "dbe0045db4814b42b08193022242511";

      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;

      try {
         const response = await fetch(url);

         if (!response.ok) {
            throw new Error("Erro ao buscar o clima");
         }

         const data = await response.json();

         if (data.erro) {
            alert("Cidade não Encontrada");
            return;
         }

         document.getElementById(
            "temperatura"
         ).textContent = `Temperatura: ${data.current.temp_c}°C`;
         document.getElementById(
            "sensacao"
         ).textContent = `Sensação: ${data.current.feelslike_c}°C`;
         document.getElementById(
            "umidade"
         ).textContent = `Umidade: ${data.current.humidity}%`;
         document.getElementById(
            "vento"
         ).textContent = `Vento: ${data.current.wind_kph}Km/h`;
      } catch (error) {
         alert("Ocorreu um erro:", error.message);
      }
   });
