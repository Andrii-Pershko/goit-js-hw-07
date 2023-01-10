import { galleryItems } from './gallery-items.js';

const galery = document.querySelector('.gallery');


const formatingGalleryItems = galleryItems.map(({original, preview, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}" data-lightbox="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
).join('');


galery.insertAdjacentHTML("beforeend", formatingGalleryItems);


//код делегування який я мав писати для прослуховування подій, 
//але бібліотека як виявилось сама все робить

// galery.addEventListener('click', showOriginalImg)

// function showOriginalImg(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== 'IMG') {
//         return
//     }
        
// }

