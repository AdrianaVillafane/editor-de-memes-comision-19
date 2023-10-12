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

//
