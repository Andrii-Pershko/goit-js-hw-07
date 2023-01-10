import { galleryItems } from './gallery-items.js';

// Change code below this line

const galery = document.querySelector('.gallery');

const formatingGalleryItems = galleryItems.map(({original, preview, description}) => 
  `<div class="gallery">
    <a class="gallery__item" href="${original}">
      <img 
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        title="Приклад Заголовку"
        enableKeyboard="false">
        
    </a>
  </div>`
).join('');




galery.insertAdjacentHTML("beforeend", formatingGalleryItems);

var lightbox = new SimpleLightbox('.gallery a', { animationSpeedl: 250, captionPosition: 'bottom'});