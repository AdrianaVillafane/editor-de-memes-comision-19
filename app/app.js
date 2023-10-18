
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
const meme = document.getElementById("container-img");

downloadButton.addEventListener("click", () => downloadMeme());


const downloadMeme = () => {
  domtoimage.toBlob($("#container-img")).then((blob) => {
      saveAs(blob, "my-meme.png")
  })
}
//BOTON DE CIERRE DE ASIDE ----> funcionando
const offAsideBtn = document.querySelector("#off-btn"); // botón X de cierre aside
const aside = document.querySelector(".aside"); 

offAsideBtn.addEventListener("click", () => {
  aside.classList.add("ocultar");
});




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
  aside.classList.remove("ocultar")
};
textButton.addEventListener("click",hideTextAside);

const hideImgAside = () => {
  textAside.classList.add("hidden");
  imgAside.classList.remove("hidden");
  aside.classList.remove("ocultar")
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
//BOTON COLOR------->FUNCIONANDO pero falta la mezcla del fondo u.u

const containerImg = document.getElementById("container-img");
const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");
const imgBackgroundColorMix = document.getElementById("filter-background");

colorPicker.addEventListener("change", () => {
  const backgroundColor = colorPicker.value;
  colorName.innerHTML = backgroundColor;
  containerImg.style.backgroundColor = backgroundColor;
});

imgBackgroundColorMix.addEventListener("change", () => {
  let mix = imgBackgroundColorMix.value;
  containerImg.style.mixBlendMode = mix;
});

// Función para cambiar el fondo del meme
const changeBackgroundMeme = () => {
  let chosenColor = colorPicker.value;
  colorName.innerHTML = `${chosenColor}`;
  containerImg.style.backgroundColor = chosenColor; // Cambia el color de fondo del contenedor
  img.style.backgroundColor = chosenColor; // Cambia el color de fondo de la imagen
};

colorPicker.addEventListener("input", changeBackgroundMeme);



//FILTERS-------RANGE---------> FUNCIONANDO
const brightnessRange = document.getElementById("brightness"); 
const opacityRange = document.getElementById("opacity"); 
const contrastRange = document.getElementById("contrast"); 
const blurRange = document.getElementById("blur");
const grayscaleRange = document.getElementById("grayscale");
const sepiaRange = document.getElementById("sepia");
const hueRange = document.getElementById("hue");
const saturationRange = document.getElementById("saturation");
const invertRange = document.getElementById("invert");

let imgFilter = () => {
  memeImg.style.filter = `brightness(${brightnessRange.value}) opacity(${opacityRange.value}) contrast(${contrastRange.value}%) blur(${blurRange.value}px) grayscale(${grayscaleRange.value}%) sepia(${sepiaRange.value}%) hue-rotate(${hueRange.value}deg) saturate(${saturationRange.value}%) invert(${invertRange.value})`;
};


brightnessRange.addEventListener("input", imgFilter);
opacityRange.addEventListener("input", imgFilter);
contrastRange.addEventListener("input", imgFilter);
blurRange.addEventListener("input", imgFilter);
grayscaleRange.addEventListener("input", imgFilter);
sepiaRange.addEventListener("input", imgFilter);
hueRange.addEventListener("input", imgFilter);
saturationRange.addEventListener("input", imgFilter);
invertRange.addEventListener("input", imgFilter);


//RESET----------->FUNCIONA

const reset = (e) => {
  e.preventDefault();
  const memeImg = document.getElementById("meme-img");
  memeImg.style.filter = `brightness(1) opacity(1) contrast(100%) blur(0px) grayscale(0%) sepia(0%) hue-rotate(0deg) saturate(100%) invert(0)`;

  // Restablecer los valores de los rangos
  brightnessRange.value = "1";
  opacityRange.value = "1";
  contrastRange.value = "100";
  blurRange.value = "0";
  grayscaleRange.value = "0";
  sepiaRange.value = "0";
  hueRange.value = "0";
  saturationRange.value = "0";
};

const resetFilterBtn = document.getElementById("reset-btn");
resetFilterBtn.addEventListener("click", (e) => {
  reset(e);
});
