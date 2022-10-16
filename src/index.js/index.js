const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
  aba.addEventListener("click", () => {

    if(aba.classList.contains("selecionado")) {
      return;
    }
      const abaselecionado = document.querySelector(".aba.selecionado");
      abaselecionado.classList.remove("selecionado");
      aba.classList.add("selecionado");

      const informacao = document.querySelector(".informacoes.selecionado");
      informacao.classList.remove("selecionado");

      const idElementoAba01 = `informacao-${aba.id}`

      const abaMostrada = document.getElementById(idElementoAba01)

      abaMostrada.classList.add("selecionado")
    });
})