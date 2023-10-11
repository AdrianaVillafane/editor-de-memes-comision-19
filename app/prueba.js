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



:root {
    --background-primary: #181818;
    --background-secondary: #192041;
    --font-color-primary: #e7e7e7;
    --font-color-secondary: #e7e7e7;
    --button-color-primary: #430373;
    --button-color-hover: #4f038a;
}

[data-theme="light-theme"] {
    --background-primary: #e7e7e7;
    --background-secondary: #ababab;
    --font-color-primary: #181818;
    --font-color-secondary: #e7e7e7;
    --button-color-primary: #7b26bc;
    --button-color-hover: #8e34d2;   
}
