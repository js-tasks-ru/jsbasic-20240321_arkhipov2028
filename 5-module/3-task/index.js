function initCarousel() {
  let elem = document.querySelector('.carousel__inner');
  let ArrowRight = document.querySelector('.carousel__arrow.carousel__arrow_right');
  let ArrowLeft = document.querySelector('.carousel__arrow.carousel__arrow_left');
  let ElementSize = document.querySelector('.carousel__img').offsetWidth;
  let position = 0;
  ArrowLeft.style.display = 'none';
  ArrowLeft.addEventListener ('click', () => {
    position--;
    elem.style.transform += 'translateX('+ ElementSize +'px)';
    ArrowHide(position);
  });
  ArrowRight.addEventListener('click', () => {
    position++;
    elem.style.transform += 'translateX(-'+ ElementSize +'px)'; 
    ArrowHide(position);
  });
  function ArrowHide(position) {
    if (position === 0) {
      ArrowLeft.style.display = 'none';
    } else {
      ArrowLeft.style.display = '';
    }
    if (position === 3) {
      ArrowRight.style.display = 'none';
    } else {
      ArrowRight.style.display = '';
    }
  }
}
