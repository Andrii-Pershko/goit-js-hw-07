import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galeryMarkUp = galleryItems.map(({ description, original, preview }, index) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a>
    `
}).join(" ");

galleryEl.insertAdjacentHTML('afterbegin', galeryMarkUp);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

