/*  */
// Botón cierre aside

const closeAsideBtn = document.getElementById("off-btn"); // botón X de cierre aside
const aside = document.getElementById("aside"); //etiqueta aside

closeAsideBtn.addEventListener("click", () => {
  aside.classList.add("hidden");//oculta clase
});


//DESCARGA MEME

const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "mi-meme.png");
    });
};



//TEXTO

const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

topTextInput.addEventListener("change", () => hideTopText("top-text"));
bottomTextInput.addEventListener("change", () => hideBottomText("bottom-text"));


const hideTopText = () => {
    topText.classList.add("top-text");
    
  };
  const hideBottomText = () => {
    bottomText.classList.add("bottom-text")
  }
//fuentes
const fontSelector = document.getElementById("font-selector");
console.log(fontSelector.value);

const changeFontFamily = () => {
  topText.style.fontFamily = `${fontSelector.value}`;
  bottomText.style.fontFamily = `${fontSelector.value}`;
};

fontSelector.addEventListener("change", () => changeFontFamily());
