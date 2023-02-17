const themStyle = document.querySelector(".style-light");
function useLightTheme() {
  console.log("Entro");
  themStyle.style.color = "#000000";
  // document.body.style.color = "#000000";
  themStyle.style.backgroundColor = "#ffffff";
  // document.body.style.backgroundColor = "#ffffff";
}
function useDarkTheme() {
  themStyle.style.color = "#ffffff";
  themStyle.style.backgroundColor = "#000000";
}
function switchTheme() {
  themStyle.classList.toggle("style-light");
  themStyle.classList.toggle("style-dark");
}
document.getElementById("btnLight").addEventListener("click", useLightTheme);
document.querySelector("#btnDark").addEventListener("click", useDarkTheme);
themStyle.addEventListener("click", switchTheme);
