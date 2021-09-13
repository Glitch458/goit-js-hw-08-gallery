const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImgEl = document.querySelector('.lightbox__image');
const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');

const CreateImgMarkup = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};
const createGalleryList = galleryItems.map(CreateImgMarkup).join('');
galleryEl.innerHTML = createGalleryList;

galleryEl.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  // galleryEl.addEventListener('keydown', changeSlide);
  window.addEventListener('keydown', pressEscKey);
  lightboxEl.classList.add('is-open');
  lightboxImgEl.src = e.target.dataset.source;
}

modalCloseBtn.addEventListener('click', modalClose);

function modalClose() {
  // galleryEl.removeEventListener('keydown', changeSlide);
  window.removeEventListener('keydown', pressEscKey);
  lightboxEl.classList.remove('is-open');
  lightboxImgEl.src = '';
}

function pressEscKey(e) {
  if (e.code === 'Escape') {
    modalClose();
  }
}

// function changeSlide(e) {
//   if (e.code === 'ArrowRight') {
//     console.log(lightboxImgEl);
//   }
//   if (e.code === 'ArrowLeft') {
//     console.dir(galleryEl.children[]);
//   }
//   return;
// }

// Доработать
