import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryPictures = document.querySelector('.gallery');   
const markupGallery = galleryItems.map((item) =>
    `<div class ="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
    </a></div>`).join("");

galleryPictures.insertAdjacentHTML("afterbegin", markupGallery)
console.log(markupGallery)
galleryPictures.addEventListener("click", handleCreatePicture)

function handleCreatePicture(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return
    }
    const imageModal = e.target.dataset.source
    const instance = basicLightbox.create(`
    <img src="${imageModal}" width="800" height="600">`, {
        onShow: () => {
            window.addEventListener('keydown', addEventListener);
        },
        onClose: () => {
            window.removeEventListener('keydown', addEventListener);
        },
    },
    );
    instance.show()

    galleryPictures.addEventListener("keydown", handlerModalClose)
    function handlerModalClose(e) {
        if (e.key === "Escape") {
            return instance.close()
        }
    }
}
