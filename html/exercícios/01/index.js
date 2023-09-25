document.querySelectorAll(".duvida").forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    if (duvida.classList.contains("ativa")) {
      duvida.classList.remove("ativa");
    } else {
      duvida.classList.add("ativa");
    }
    // duvida.classList.toggle('ativa')
  });
});

document.querySelector("#imgStart").classList.add("imgTransition");
