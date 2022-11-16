import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './modal.js';
import { resetForm } from './preview-photo.js';

const photoForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const loader = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');


const pristine = new Pristine(photoForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
}, false);

const closeLoader = () => {
  loader.classList.add('hidden');
  body.classList.remove('modal-open');
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


const onSendError = () => {
  showErrorMessage();
  unblockSubmitButton();
};

const onSendSuccess = () => {
  showSuccessMessage();
  resetForm();
  unblockSubmitButton();
  closeLoader();
};

const validateForm = () => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        onSendSuccess,
        onSendError,
        new FormData(evt.target)
      );
    }
  });
};

export { validateForm, resetForm };
