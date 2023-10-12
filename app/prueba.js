//FORMULARIOS => .value

// console.log($("#text").value)
// input

// $("#text").addEventListener("input", (e) => {
//     // $(".paragraph").innerText = e.target.value
//     $(".meme").style.backgroundImage = `url(${e.target.value})`
// })

// $("#color").addEventListener("input", (e) => {
//     $("body").style.backgroundColor = e.target.value
// })

// const allFiltersMeme = () => {
//     $(".meme").style.filter = `blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%)`
// }

// $("#blur").addEventListener("input", allFiltersMeme)
// $("#grayscale").addEventListener("input", allFiltersMeme)

// $("#reset").addEventListener("click", () => {
//     $("#blur").value = "0"
//     $("#grayscale").value = "0"
//     $(".meme").style.filter = "none"
// })

// $("#font").addEventListener("input", (e) => {
//     $("body").style.fontFamily = e.target.value
// })

// $("#number").addEventListener("input", (e) => {
//     $("body").style.fontSize = `${e.target.value}px`
// })

// $("#displayTopText").addEventListener("input", (e) => {
//     if (e.target.checked) {
//         $("p").style.display = "none"
//     } else {
//         $("p").style.display = "block"
//     }
// })



//Dounload ----> en revision
const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("#container-img");

downloadButton.addEventListener("click", () => downloadMeme());


const downloadMeme = () => {
  domtoimage.toBlob($("#container-img")).then((blob) => {
      saveAs(blob, "my-meme.png")
  })
}

//FILTRO DE FONDO
const filtroFondo = () => {
    memeImg.style.backgroundBlendMode = `ninguno(${ninguno.value})`;
};

//FILTROS
const filtros = () => {
    memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueRotateInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturateInput.value}%) invert(${invertInput.value})`;
};

//ESCALA DE BRILLO-
// Obtener referencias a los elementos del DOM
const brightnessSlider = document.getElementById("brightness-slider");
const image = document.getElementById("meme-img");

// Manejar el evento de cambio del input range
brightnessSlider.addEventListener("input", () => {
    console.log("funcion brillo  se ejecuta");
    // Obtener el valor del input range
    const brightnessValue = brightnessSlider.value;

    // Aplicar el filtro de brillo a la imagen
    memeImg.style.filter = `brightness(${brightnessValue}%)`;
    filtros();
});

//OPACIDAD
//Obtener datos
const opacitySlider = document.getElementById("opacity-slider");
//Manejar el evento de cambio de input range
opacitySlider.addEventListener("input", () => {
    console.log("funcion opacidad se ejecuta");
    const opacityValue = opacitySlider.value;

    //Aplicar el filtro en la imagen
    memeImg.style.filter = `opacity(${opacityValue})`;
    filtros();
});
//Aplicar filtro a la imagen
const opacityValue = opacitySlider.value;
memeImg.style.filter = `opacity(${opacityValue})`;
//CONTRASTE
//obtengo datos
const contrastSlider = document.getElementById("contrast-slider");
//evento cambio de input rango
contrastSlider.addEventListener("input", () => {
    const contrastValue = contrastSlider.value;

    //aplico filtro a la imagen
    memeImg.style.filter = `contrast(${contrastValue})`;
    filtros();
});
//DESENFOQUE (BLUR)
//obtengo datos
const blurSlider = document.getElementById("blur-slider");
//evento cambio de input rango
blurSlider.addEventListener("input", () => {
    const blurValue = blurSlider.value;
    //aplico a imagen
    memeImg.style.filter = `blur(${blurValue})`;
    filtros();
});

//ESCALA DE GRISES-FUNCIONANDO
// Obtener referencias a los elementos del DOM
const grayscaleSlider = document.getElementById("grayscale-slider");

// Manejar el evento de cambio del input range
grayscaleSlider.addEventListener("input", () => {
    // Obtener el valor del input range
    const grayscaleValue = grayscaleSlider.value;

    // Aplicar el filtro de escala de grises a la imagen
    memeImg.style.filter = `grayscale(${grayscaleValue}%)`;
    filtros();
});
//SEPIA
//Obtener datos
const sepiaSlider = document.getElementById("sepia-slider");

//manejar el evento de cambio del input range
sepiaSlider.addEventListener("input", () => {
    //obtener el valor del input range
    const sepiaValue = sepiaSlider.value;
    //aplico filtro a la imagen
    memeImg.style.filter = `sepia(${sepiaValue}%)`;
    filtros();
});
//HUE
//datos
const hueRotateSlider = document.getElementById("hue-rotate-slider");
//evento

hueRotateSlider.addEventListener("input", () => {
    //obtengo valor del input
    const hueRotateValue = hueRotateSlider.value;
    //aplico en la img
    memeImg.style.filter = `hue(${hueRotateValue}deg)`;
    filtros();
});
console.log(filtros);
//SATURACION
//datos
const saturationSlider = document.getElementById("saturation-slider");
//
saturationSlider.addEventListener("input", () => {
    //obtengo valor del input
    const saturationValue = saturationSlider.value;
    //aplico en la img
    memeImg.style.filter = `saturation(${saturationValue})`;
    filtros();
});

// NEGATIVO
// Obtener referencias a los elementos del DOM
const invertSlider = document.getElementById("invert-slider");

// Manejar el evento de cambio del input range
invertSlider.addEventListener("input", () => {
    // Obtener el valor del input range
    const invertValue = invertSlider.value;

    // Aplicar el filtro de escala de grises a la imagen
    memeImg.style.filter = `invert(${invertValue}%)`;
    filtros();
});
