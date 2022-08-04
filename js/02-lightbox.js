import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCollection = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map((item) => `<a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("");

galleryCollection.insertAdjacentHTML("afterbegin", galleryMarkup);


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom'})












