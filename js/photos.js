
const pictures = document.querySelector('.pictures');
const similarPhotosTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const fragment = document.createDocumentFragment();

const getOtherPhotos = (photos) => {
  photos.forEach(({ url, likes, comments }) => {

    const otherPhoto = similarPhotosTemplate.cloneNode(true);

    const photo = otherPhoto.querySelector('.picture__img');
    const likesCount = otherPhoto.querySelector('.picture__likes');
    const commentsCount = otherPhoto.querySelector('.picture__comments');

    if(url) {
      photo.src = url;
    } else {
      url.remove();
    }

    if(likes) {
      likesCount.textContent = likes;
    } else {
      likesCount.remove();
    }

    if(comments) {
      commentsCount.textContent = comments;
    } else {
      commentsCount.remove();
    }

    return fragment.append(otherPhoto);

  });

  return pictures.append(fragment);
};

export { getOtherPhotos };
