document.querySelectorAll(".duvida").forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.add("fundo-azul");
  });
});
