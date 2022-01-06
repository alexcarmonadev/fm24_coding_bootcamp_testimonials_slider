const btnLeft = document.querySelector('.sliders1');
const btnRight = document.querySelector('.sliders2');
const articleOne = document.querySelector('.article-one');
const articleTwo = document.querySelector('.article-two');

const sliders = (e) => {
  if (e.target.matches('x')) {
    articleOne.classList.toggle('hidden');
    articleTwo.classList.toggle('hidden');
  } else {
    articleOne.classList.toggle('hidden');
    articleTwo.classList.toggle('hidden');
  }
};

btnLeft.addEventListener('click', sliders);
btnRight.addEventListener('click', sliders);
