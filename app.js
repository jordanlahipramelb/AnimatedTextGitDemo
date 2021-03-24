function randomRGB() {
  const r = Math.floor(Math.random() * 256); //not 255 because highest number for that would be 254.99
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const h1 = document.querySelector('h1');

// h1.style.color = randomRGB();

// setInterval(function(){}, interval time)

//this will select the h1 container
// setInterval(function () {
//   h1.style.color = randomRGB();
// }, 500);

//selecting h1s with a class of letter
const letters = document.querySelectorAll('.letter'); //dot means class

//loop over of each class = 'letter'
//a random color is selected every 500 ms
setInterval(function () {
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 500);
