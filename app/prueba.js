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


// COLOR DEL TEXTO Y BACKROUND COLOR DEL TXT

const colorInput = document.querySelector(".color-input"); //input type color texto meme
const colorSpan = document.getElementById("color-span"); //span del input color de texto meme
const txtBackgroundColorInput = document.querySelector(
  ".txt-background-color-input"
); // input type color fondo texto meme
const txtBackgroundColorSpan = document.getElementById(
  "txt-background-color-span"
); //span del imput color fondo texto
const transparentBackground = document.getElementById("no-background"); //input checkbox fondo transparente

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  colorSpan.innerHTML = color;
  memeTopText.style.color = color;
  memeBottomText.style.color = color;
});

txtBackgroundColorInput.addEventListener("input", () => {
  fondo = txtBackgroundColorInput.value;
  txtBackgroundColorSpan.innerHTML = fondo;
  memeTopText.style.backgroundColor = fondo;
  memeBottomText.style.backgroundColor = fondo;
});

transparentBackground.addEventListener("change", (event) => {
  if (event.target.checked) {
    memeTopText.style.backgroundColor = "transparent";
    memeBottomText.style.backgroundColor = "transparent";
    memeTopText.style.position = "absolute";
    memeBottomText.style.position = "absolute";
    memeBottomText.style.bottom = "8px";
  } else {
    memeTopText.style.backgroundColor = fondo;
    memeBottomText.style.backgroundColor = fondo;
    memeBottomText.style.bottom = "0px";
    memeTopText.style.position = "static";
    memeBottomText.style.position = "static";
  }
});

//checkbox "sin texto sup"

const noTopText = document.getElementById("top-txt-non"); //input "sin texto superior"

noTopText.addEventListener("click", () => {
  memeTopText.classList.toggle("hidden");
});

//checkbox "sin texto sup"
const noBottomText = document.getElementById("bottom-txt-non"); //input "sin texto inferior"
noBottomText.addEventListener("click", () => {
  memeBottomText.classList.toggle("hidden");
});
