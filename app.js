const submitBtn = document.querySelector('.submit-btn');
const ratingBtns = document.getElementsByClassName('rating-btn');
const ratingContent = document.getElementById('rating-content');
const thanksContent = document.getElementById('thanks-content');
const selectedRating = document.querySelector('.selected-rating');

submitBtn.addEventListener('click', () => {
  ratingContent.classList.add('hidden');
  thanksContent.classList.remove('hidden');
  setTimeout(() => {
    thanksContent.classList.add('open');
  }, 100);
});

for (let i = 0; i < ratingBtns.length; i++) {
  ratingBtns[i].addEventListener('click', () => {
    selectedRating.innerHTML = (i + 1).toString();
  });
}
