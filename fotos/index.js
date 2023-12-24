const image = document.getElementById("image");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");

fetch('https://i.imgur.com/ObcPAoF.png')
.then(data => {
  image.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/Cra3lpx.png')
.then(data => {
  image2.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/GxXCje6.png')
.then(data => {
  image3.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/9YxiNiK.png')
.then(data => {
  image4.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/vJwpg8e.png')
.then(data => {
  image5.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/lFCK4GY.png')
.then(data => {
  image6.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/dg1i0Wk.png')
.then(data => {
  image7.innerHTML = `<img src=${data.url} />`
})

fetch('https://i.imgur.com/COLU3u1.png')
.then(data => {
  image8.innerHTML = `<img src=${data.url} />`
})