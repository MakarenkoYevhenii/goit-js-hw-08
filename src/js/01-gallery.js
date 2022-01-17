import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryEL = document.querySelector('.gallery');  
const makeGalleryCard = ({preview, original,description} = {}) => {
    return `<a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
      />
  </a>
  `;
  };

  const galleryLiElements = galleryItems.map(pic => {
      return makeGalleryCard(pic);
  });
  
  galleryEL.insertAdjacentHTML('afterbegin', galleryLiElements.join(''));
  console.log(galleryItems);
  
  
  let nameOfPictures = new SimpleLightbox('.gallery a',{captionsData: "alt" , captionDelay:250 });

console.log(galleryEL);
