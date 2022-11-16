const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const imagePreviewElement = document.querySelector('.img-upload__preview img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');


const scalePhotoPreview = (value) => {
  const scale = parseInt(value, 10) / 100;
  imagePreviewElement.style.transform = `scale(${scale})`;
};


const onScaleIncrease = () => {
  const newScale = parseInt(scaleInputElement.value, 10) + SCALE_STEP;
  if (newScale <= SCALE_MAX) {
    scalePhotoPreview(newScale);
    scaleInputElement.value = `${newScale}%`;
  }
};

const onScaleDecrease = () => {
  const newScale = parseInt(scaleInputElement.value, 10) - SCALE_STEP;
  if (newScale >= SCALE_MIN) {
    scalePhotoPreview(newScale);
    scaleInputElement.value = `${newScale}%`;
  }
};


const toggleScale = () => {
  scaleSmaller.addEventListener('click', onScaleDecrease);
  scaleBigger.addEventListener('click', onScaleIncrease);
};

export { toggleScale, SCALE_MAX, scalePhotoPreview };
