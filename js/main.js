
import { validateForm } from './validation.js';
import { loadPhotos } from './render-other-photos.js';
import { closeForm, openForm } from './open-loader.js';
import { loadNewPhoto } from './preview-photo.js';


loadPhotos();
openForm();
closeForm();
validateForm();
loadNewPhoto();
