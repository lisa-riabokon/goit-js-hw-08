import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// 1.Стоворюємо розмітку i рндеримо її в дів
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__link" href="${original}">
      <img src="${preview}" 
      alt="${description}" 
      title="${description}"/></a>
    `;
    })
    .join('');
}
//  ---------------------------------------

// Додаємо слухача кліків
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  // Відміна завантаження за замовчуванням
  evt.preventDefault();

  // Перевірка, що клік на зображенні
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}

// підключення модального вікна з затримкою опису в 250мс
new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
});
