const botoes = document.querySelectorAll(".card button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => { /*basicamente todo botao dos cards ao serem clicados alteram a classe do card correspondente*/
        const card = botao.parentElement;
        card.classList.toggle("destaque");
    });
});