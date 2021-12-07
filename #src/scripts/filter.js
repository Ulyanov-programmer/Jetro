function filtContentByType(e) {
  let typeOfContent = e.currentTarget.dataset.filtContent;

  for (const contentBlock of contentBlocks) {
    if (typeOfContent === 'all' || contentBlock.dataset.contentType === typeOfContent) {
      contentBlock.style.display = '';
    } else {
      contentBlock.style.display = 'none';
    }
  }
}
const filterButtons = document.querySelectorAll('[data-filt-content]');
for (let filtButton of filterButtons) {
  filtButton.addEventListener('click', filtContentByType);
}
const contentBlocks = document.querySelectorAll('[data-content-type]');