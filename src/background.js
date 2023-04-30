const images = ['1.png', '2.png', '3.png'];

const chosenImg = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImg);

// const bgImg = document.createElement('img');
const body = document.querySelector('body');
body.style.background = `url(../img/${chosenImg})`;
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';

// bgImg.src = `img/${chosenImg}`;
// console.log(bgImg.src);

// document.body.appendChild(bgImg);
