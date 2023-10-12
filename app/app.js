
//MODO OSCURO-CLARO// ----->FUNCIONAA
const $ = (selector) => document.querySelector(selector)

$("#change-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-mode")
    if (currentTheme) {
        $("body").removeAttribute("data-mode", "clear-mode")
    } else {
        $("body").setAttribute("data-mode", "clear-mode")
    }
    $("#btn-dark-mode").classList.toggle("hidden")
    $("#btn-clear-mode").classList.toggle("hidden")
})

//IMAGEN MODO OSCURO-CLARO// ------->LAMPARITA   FUNCIONA



$("#change-theme").addEventListener("click", () => {
  $("#change-theme").classList.toggle("on")
})



//COLOR DEL BACKGROUND DEL MEME   ----> FUNCIONA
$("#color").addEventListener("input", (e) => {
      $("#meme-img").style.backgroundColor = e.target.value
   })
//COLOR FUENTE SUPERIOR------> FUNCIONA
$("#color-font").addEventListener("input", (e) =>{
  $("#txt-upper-meme").style.color = e.target.value
})
//COLOR FUENTE INFERIOR ------> FUNCIONA
$("#color-font").addEventListener("input", (e) =>{
  $("#txt-lower-meme").style.color = e.target.value
})


//CAMBIO--ASIDE------FUNCIONANDO
const textButton = document.getElementById("btn-txt");
const imgButton = document.getElementById("btn-img");
const modeButton = document.getElementById("change-theme");

const textAside = document.getElementById("section-txt");
const imgAside = document.getElementById("section-img");
const mainContainer = document.getElementById("container-icons");

const bothAsides = document.getElementsByClassName("aside");

textButton.addEventListener("click", () => hideTextAside());
imgButton.addEventListener("click", () => hideImgAside());
modeButton.addEventListener("click", () => changeMode());

const hideTextAside = () => {
  imgAside.classList.add("hidden");
  textAside.classList.remove("hidden");
};

const hideImgAside = () => {
  textAside.classList.add("hidden");
  imgAside.classList.remove("hidden");
};

//URL-------->FUNCIONANDO

const urlInput = document.getElementById("url-input");
const memeImg = document.getElementById("meme-img");

console.log(memeImg);

urlInput.addEventListener("input", () => changeBackground());

const changeBackground = () => {
    memeImg.style.backgroundImage = `url(${urlInput.value})`;
    memeImg.style.backgroundSize = "cover";
    memeImg.style.backgroundRepeat = "no-repeat";
    memeImg.style.backgroundPosition = "center";
};
//BOTON COLOR------->FUNCIONANDO

const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");

const cambiarFondoMeme = () => {
    let colorElegido = colorPicker.value;
    colorName.innerHTML = `${colorElegido}`;
};

colorPicker.addEventListener("input", () => cambiarFondoMeme());

//COLOR DE FONDO, conteiner de imagen
// Obtengo los elementos del DOM
const colorInput = document.getElementById("color-picker");

// Agrego un evento de escucha al campo de entrada
colorInput.addEventListener("input", function () {
    let color = colorInput.value;
    memeImg.style.backgroundColor = color;
});

