const images = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"]

const chosenImage = images[Math.floor(Math.random() * images.length)];


//create element
// const backgroundImg = document.createElement("img");
// backgroundImg.src = `img/${chosenImage}`

// //add inside of body, html
// document.body.appendChild(backgroundImg);
document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
//document.body.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) )";
