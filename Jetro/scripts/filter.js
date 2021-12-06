function filtContentByType(e) {
  let typeOfContent = e.currentTarget.dataset.filtContent;

  for (const work of works) {
    if (typeOfContent === 'all' || work.dataset.contentType === typeOfContent) {
      work.style.display = '';
    } else {
      work.style.display = 'none';
    }
  }
}
const filterButtons = document.querySelectorAll('[data-filt-content]');
for (let filtButton of filterButtons) {
  filtButton.addEventListener('click', filtContentByType);
}
const works = document.querySelectorAll('[data-content-type]');