import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener("click", selectOnlyImgCard);

const galeryMarkUp = galleryItems.map(({ description, original, preview }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `
}).join(" ");

galleryEl.insertAdjacentHTML('afterbegin', galeryMarkUp);

function selectOnlyImgCard(e) {
    e.preventDefault();
    const tagName = e.target.tagName;
    const imgLink = e.target.dataset.source;

    if (tagName !== 'IMG') {
        console.log("Click not on the picture");
        return
    }

    createModal(imgLink)
    
};

function createModal(imgLink) {
    const instance = basicLightbox.create(`
    <img src="${imgLink}" width="800" height="600">
`)

    instance.show();
    window.addEventListener("keydown", onEscKeyPress);
    
    function onEscKeyPress(event) {
        const isEscKey = event.code === "Escape";
        if (isEscKey) {
            instance.close();
            window.removeEventListener("keydown", onEscKeyPress);
        }
    }
};
