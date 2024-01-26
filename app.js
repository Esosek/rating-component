const submitBtn = document.querySelector('.submit-btn');
const ratingContent = document.getElementById('rating-content');
const thanksContent = document.getElementById('thanks-content');

submitBtn.addEventListener('click', () => {
  ratingContent.classList.toggle('hidden');
  thanksContent.classList.toggle('hidden');
});
