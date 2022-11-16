
const CHROME_MIN_VALUE = 0;
const CHROME_MAX_VALUE = 1;
const CHROME_STEP = 0.1;
const SEPIA_MIN_VALUE = 0;
const SEPIA_MAX_VALUE = 1;
const SEPIA_STEP = 0.1;
const MARVIN_MIN_VALUE = 0;
const MARVIN_MAX_VALUE = 100;
const MARVIN_STEP = 1;
const PHOBOS_MIN_VALUE = 0;
const PHOBOS_MAX_VALUE = 3;
const PHOBOS_STEP = 0.1;
const HEAT_MIN_VALUE = 1;
const HEAT_MAX_VALUE = 3;
const HEAT_STEP = 0.1;
const NONE_MIN_VALUE = 0;
const NONE_MAX_VALUE = 100;
const NONE_STEP = 1;
const NONE_START = 100;

const EffectTypes = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const imagePreviewElement = document.querySelector('.img-upload__preview img');
const effectListInputElements = document.querySelectorAll('.effects__radio');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');

const setImgStyle = (style) => {
  imagePreviewElement.style.filter = style;
};

let selectedEffect = EffectTypes.NONE;

noUiSlider.create(sliderElement, {
  range: {
    min: NONE_MIN_VALUE,
    max: NONE_MAX_VALUE,
  },
  start: NONE_START,
  step: NONE_STEP,
  connect: 'lower',
});

sliderElement.disabled = true;
sliderContainerElement.classList.add('hidden');

const updateSliderOptions = (effectType) => {
  sliderElement.disabled = false;
  if (sliderContainerElement.classList.contains('hidden')) {
    sliderContainerElement.classList.remove('hidden');
  }

  switch (effectType) {
    case EffectTypes.CHROME:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: CHROME_MIN_VALUE,
          max: CHROME_MAX_VALUE
        },
        step: CHROME_STEP
      });
      sliderElement.noUiSlider.set(CHROME_MAX_VALUE);
      break;
    case EffectTypes.SEPIA:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: SEPIA_MIN_VALUE,
          max: SEPIA_MAX_VALUE
        },
        step: SEPIA_STEP
      });
      sliderElement.noUiSlider.set(SEPIA_MAX_VALUE);
      break;
    case EffectTypes.MARVIN:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: MARVIN_MIN_VALUE,
          max: MARVIN_MAX_VALUE
        },
        step: MARVIN_STEP,
      });
      sliderElement.noUiSlider.set(MARVIN_MAX_VALUE);
      break;
    case EffectTypes.PHOBOS:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: PHOBOS_MIN_VALUE,
          max: PHOBOS_MAX_VALUE
        },
        step: PHOBOS_STEP,
      });
      sliderElement.noUiSlider.set(PHOBOS_MAX_VALUE);
      break;
    case EffectTypes.HEAT:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: HEAT_MIN_VALUE,
          max: HEAT_MAX_VALUE
        },
        step: HEAT_STEP,
      });
      sliderElement.noUiSlider.set(PHOBOS_MAX_VALUE);
      break;
    default:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: NONE_MIN_VALUE,
          max: NONE_MAX_VALUE,
        },
        step: NONE_STEP,
      });
      sliderElement.noUiSlider.set(NONE_MAX_VALUE);
      sliderElement.disabled = true;
      sliderContainerElement.classList.add('hidden');
      break;
  }
};

const setEffectStyle = (value) => {
  switch(selectedEffect) {
    case EffectTypes.CHROME:
      setImgStyle(`grayscale(${value})`);
      break;
    case EffectTypes.SEPIA:
      setImgStyle(`sepia(${value})`);
      break;
    case EffectTypes.MARVIN:
      setImgStyle(`invert(${value}%)`);
      break;
    case EffectTypes.PHOBOS:
      setImgStyle(`blur(${value}px)`);
      break;
    case EffectTypes.HEAT:
      setImgStyle(`brightness(${value})`);
      break;
    default:
      setImgStyle('');
      break;
  }
};

const setDefaultEffects = () => {
  selectedEffect = EffectTypes.NONE;
  updateSliderOptions(selectedEffect);
  setEffectStyle();
  effectListInputElements[0].checked = true;
};

const addNewFilter = (button) => {
  imagePreviewElement.className = '';
  setEffectStyle();
  selectedEffect = button.value;

  if (selectedEffect !== EffectTypes.NONE) {
    const newEffectClass = `effects__preview--${selectedEffect}`;
    imagePreviewElement.classList.add(newEffectClass);
  }

  updateSliderOptions(selectedEffect);
};

const changeFilter = () => {
  effectListInputElements.forEach((effectButton) => {
    effectButton.addEventListener('change', () => addNewFilter(effectButton));
  });

  sliderElement.noUiSlider.on('update', () => {
    sliderValueElement.value = sliderElement.noUiSlider.get();
    setEffectStyle(sliderValueElement.value);
  });
};

export { changeFilter, setDefaultEffects };


