const images = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"]

const chosenImage = images[Math.floor(Math.random() * images.length)];


//create element
const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${chosenImage}`

//add inside of body, html
document.body.appendChild(backgroundImg);
