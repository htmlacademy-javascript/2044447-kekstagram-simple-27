const API_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onError) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }})
    .catch(onError);
};
export { getData, sendData };
