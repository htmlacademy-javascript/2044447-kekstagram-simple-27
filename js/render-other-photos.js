import { getData } from './api.js';
import { getOtherPhotos } from './photos.js';
import { showAlert } from './util.js';

const PHOTOS_COUNT = 25;

const renderPhotos = (images) => getOtherPhotos(images);

const onDataLoad = (photos) => {
  renderPhotos(photos.slice(0, PHOTOS_COUNT));
};

const onDataFailed = () => {
  showAlert('О, нет! Что-то сломалось. Попробуйте ещё раз');
};

const loadPhotos = () => getData(onDataLoad, onDataFailed);

export { loadPhotos };
