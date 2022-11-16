import { isEscapeKey } from './util.js';
import { toggleScale } from './toggler_scale.js';
import { changeFilter } from './slider.js';
import { resetForm } from './preview-photo.js';

const loader = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const loaderOpenElement = document.querySelector('.img-upload__label');
const loaderCloseElement = loader.querySelector('.img-upload__cancel');

const openForm = () => {
  loaderOpenElement.addEventListener('click', () => {
    loader.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        loader.classList.add('hidden');
        resetForm();
      }
    });
  });
  toggleScale();
  changeFilter();
};

const closeForm = () => {
  loaderCloseElement.addEventListener('click', () => {
    loader.classList.add('hidden');
    body.classList.remove('modal-open');
    resetForm();
  });
};

export { openForm, closeForm };
