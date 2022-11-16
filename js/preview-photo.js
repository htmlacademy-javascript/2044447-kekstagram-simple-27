import { setDefaultEffects } from './slider.js';
import { SCALE_MAX, scalePhotoPreview } from './toggler_scale.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const PREVIEW_DEFAULT = 'img/upload-default-image.jpg';

const fileChooser = document.querySelector('.img-upload__input ');
const preview = document.querySelector('.img-upload__preview img');
const imageUploadForm = document.querySelector('.img-upload__form');
const imagePreviewElement = document.querySelector('.img-upload__preview img');
const scaleInputElement = document.querySelector('.scale__control--value');

const loadNewPhoto = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

const clearPhotos = () => {
  preview.src = PREVIEW_DEFAULT;
};

const resetForm = () => {
  imageUploadForm.reset();
  clearPhotos();
  setDefaultEffects();
  imagePreviewElement.className = '';
  scaleInputElement.value = '100%';
  scalePhotoPreview(SCALE_MAX);
};


export { loadNewPhoto, resetForm };

