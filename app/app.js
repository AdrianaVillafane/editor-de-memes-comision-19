/*  */
// Botón cierre aside

const closeAsideBtn = document.getElementById("off-btn"); // botón X de cierre aside
const aside = document.getElementById("aside"); //etiqueta aside

closeAsideBtn.addEventListener("click", () => {
  aside.classList.add("hidden");//oculta clase
});