/* const promessa = new Promise((resolve, reject) => {
    const sucesso = Math.random() > 0.5;
  
    setTimeout(() => {
      if (sucesso) {
        resolve("Download concluído!");
      } else {
        reject("Erro no download");
      }
    }, 3000);
  });
  
  promessa
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    });
    */

/* const promessa = new Promise((resolve, reject) => {
    const login = true;

    if (login) {
        resolve("Login bem-sucedido!");
    } else {
        reject("Credenciais inválidas.");
    }
});

promessa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    });
    */


const promessa = new Promise((resolve, reject) => {
    const pedido = true;

    setTimeout(() => {
        if (pedido) {
            resolve("Pedido aprovado e enviado!");
        } else {
            reject("Erro no pedido");
        }
    }, 2000);
});

promessa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    })
    .finally(() => {
        console.log("Processo Finalizado.")
    });
