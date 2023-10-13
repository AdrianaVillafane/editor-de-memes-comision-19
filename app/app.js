
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

//Dounload ----> en revision
const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("#container-img");

downloadButton.addEventListener("click", () => downloadMeme());


const downloadMeme = () => {
  domtoimage.toBlob($("#container-img")).then((blob) => {
      saveAs(blob, "my-meme.png")
  })
}


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

const changeBackgroundMeme = () => {
    let chosenColor = colorPicker.value;
    colorName.innerHTML = `${chosenColor}`;
};

colorPicker.addEventListener("input", () => changeBackgroundMeme());

//COLOR DE FONDO, conteiner de imagen
// Obtengo los elementos del DOM
const colorInput = document.getElementById("color-picker");

// Agrego un evento de escucha al campo de entrada
colorInput.addEventListener("input", function () {
    let color = colorInput.value;
    memeImg.style.backgroundColor = color;
});

//FILTROS
const filters = () => {
  memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueRotateInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturateInput.value}%) invert(${invertInput.value})`;
};

//ESCALA DE BRILLO-
// Obtener referencias a los elementos del DOM
const image = document.getElementById("meme-img");


const brightnessSlider = document.getElementById("brightness-slider");

// Manejar el evento de cambio del input range
brightnessSlider.addEventListener("input", () => {
  console.log("funcion brillo  se ejecuta");
  // Obtener el valor del input range
  const brightnessValue = brightnessSlider.value;

  // Aplicar el filtro de brillo a la imagen
  memeImg.style.filter = `brightness(${brightnessValue}%)`;
  filters();
});

//OPACITY//
//obtengo datos
const opacitySlider = document.getElementById("opacity-slider")
//manejo evento de cambio en slider
opacitySlider.addEventListener("input",()=> {
  console.log("opacity ok");
  const opacityValue = opacitySlider.value
  //aplico a la imagen
  memeImg.style.filter = `opacity(${opacityValue})`;
  filters();
})



//ESCALA DE GRISES-FUNCIONANDO
// Obtener referencias a los elementos del DOM
const grayscaleSlider = document.getElementById("grayscale");

// Manejar el evento de cambio del input range
grayscaleSlider.addEventListener("input", () => {
  console.log("funcion de grises ok");
    // Obtener el valor del input range
    const  grayscaleValue = grayscaleSlider.value;

    // Aplicar el filtro de escala de grises a la imagen
    memeImg.style.filter = `grayscale(${grayscaleValue}%)`;
    filters();
});