//MODO OSCURO-CLARO// ----->FUNCIONAA
const $ = (selector) => document.querySelector(selector);

$("#change-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-mode");
    if (currentTheme) {
        $("body").removeAttribute("data-mode", "clear-mode");
    } else {
        $("body").setAttribute("data-mode", "clear-mode");
    }
    $("#btn-dark-mode").classList.toggle("hidden");
    $("#btn-clear-mode").classList.toggle("hidden");
});

//IMAGEN MODO OSCURO-CLARO// ------->LAMPARITA   FUNCIONA

$("#change-theme").addEventListener("click", () => {
    $("#change-theme").classList.toggle("on");
});

//Dounload ----> en revision
const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("container-img");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob($("#container-img")).then((blob) => {
        saveAs(blob, "my-meme.png");
    });
};
//BOTON DE CIERRE DE ASIDE ----> funcionando
const offAsideBtn = document.querySelector("#off-btn"); // botón X de cierre aside
const aside = document.querySelector(".aside");

offAsideBtn.addEventListener("click", () => {
    aside.classList.add("ocultar");
});

//COLOR DEL BACKGROUND DEL MEME   ----> FUNCIONA
$("#color").addEventListener("input", (e) => {
    $("#meme-img").style.backgroundColor = e.target.value;
});
//COLOR FUENTE SUPERIOR------> FUNCIONA
$("#color-font").addEventListener("input", (e) => {
    $("#txt-upper-meme").style.color = e.target.value;
});
//COLOR FUENTE INFERIOR ------> FUNCIONA
$("#color-font").addEventListener("input", (e) => {
    $("#txt-lower-meme").style.color = e.target.value;
});
//------*-----*-----
const colorPickerFont = document.getElementById("color-font");
const colorNameFont = document.getElementById("color-name-font");

colorPickerFont.addEventListener("change", () => {
    const fontColor = colorPickerFont.value;
    colorNameFont.innerHTML = fontColor;
    containerImg.style.backgroundColor = backgroundColor;
});

//TEXTO SUPERIOR----->FUNCIONANDO

const txtUpperMeme = document.getElementById("txt-upper-meme"); // texto superior
const upperTxtArea = document.getElementById("upper-txt-area"); // ingreso de texto

// TEXTO INFERIOR----->FUNCIONANDO
const txtLowerMeme = document.getElementById("txt-lower-meme"); // texto inferior
const lowerTxtArea = document.getElementById("lower-txt-area"); // ingreso de texto
//TEXAREA SUPERIOR
upperTxtArea.addEventListener("input", () => {
    let upperTxt = upperTxtArea.value;
    txtUpperMeme.innerHTML = upperTxt;
});
//TEXTAREA INFERIOR
lowerTxtArea.addEventListener("input", () => {
    let lowerTxt = lowerTxtArea.value;
    txtLowerMeme.innerHTML = lowerTxt;
});

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
    aside.classList.remove("ocultar");
};
textButton.addEventListener("click", hideTextAside);

const hideImgAside = () => {
    textAside.classList.add("hidden");
    imgAside.classList.remove("hidden");
    aside.classList.remove("ocultar");
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

// FUENTES-SELECCION-FONT-FAMILY----------

const fontsOptions = document.getElementById("fonts");

fontsOptions.addEventListener("change", () => {
    txtUpperMeme.style.fontFamily = `${fontsOptions.value}`;
    txtLowerMeme.style.fontFamily = `${fontsOptions.value}`;
});

// FUENTE - FONT-SIZE

const fontSize = document.getElementById("font-size");

fontSize.addEventListener("change", () => {
    txtUpperMeme.style.fontSize = `${fontSize.value}px`;
    txtLowerMeme.style.fontSize = `${fontSize.value}px`;
});
fontSize.onkeyup = () => {
    txtUpperMeme.style.fontSize = `${fontSize.value}px`;
    txtLowerMeme.style.fontSize = `${fontSize.value}px`;
};

// FUENTE - ALINEACION-----****FUNCIONA******-----

const alignLeft = document.getElementById("left-alignment"); //Botón align left
const alignCenter = document.getElementById("center-alignment"); //Botón align center
const alignRight = document.getElementById("right-alignment"); //Botón align right

alignLeft.addEventListener("click", () => {
    txtUpperMeme.style.textAlign = "left";
    txtLowerMeme.style.textAlign = "left";
});

alignCenter.addEventListener("click", () => {
    txtUpperMeme.style.textAlign = "center";
    txtLowerMeme.style.textAlign = "center";
});

alignRight.addEventListener("click", () => {
    txtUpperMeme.style.textAlign = "right";
    txtLowerMeme.style.textAlign = "right";
});

//***BORDES****//
const noBorder = document.getElementById("no-border");
const darkBorder = document.getElementById("dark-border");
const clearBorder = document.getElementById("clear-border");

noBorder.addEventListener("click", () => {
    txtUpperMeme.style.webkitTextStroke = "transparent";
    txtLowerMeme.style.webkitTextStroke = "transparent";
});

darkBorder.addEventListener("click", () => {
    txtUpperMeme.style.webkitTextStroke = "1px black";
    txtLowerMeme.style.webkitTextStroke = "1px black";
});

clearBorder.addEventListener("click", () => {
    txtUpperMeme.style.webkitTextStroke = "1px white";
    txtLowerMeme.style.webkitTextStroke = "1px white";
});

//*******ESPACIADO******/

const paddingText = document.getElementById("padding-input");

paddingText.addEventListener("change", () => {
    txtUpperMeme.style.paddingTop = `${paddingText.value}px`;
    txtUpperMeme.style.paddingBottom = `${paddingText.value}px`;
    txtLowerMeme.style.paddingTop = `${paddingText.value}px`;
    txtLowerMeme.style.paddingBottom = `${paddingText.value}px`;
});

//******INTERLINEADO*******//

const lineSpacing = document.getElementById("interlineado"); //select con opciones

lineSpacing.addEventListener("change", () => {
    txtUpperMeme.style.lineHeight = `${lineHeight.value}`;
    txtLowerMeme.style.lineHeight = `${lineHeight.value}`;
});
