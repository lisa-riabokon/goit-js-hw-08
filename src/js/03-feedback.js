import throttle from 'lodash.throttle';
// localStorage.setItem(
//   'feedback-form-state',
//   JSON.stringify({ name: 'Lisa', age: 25 })
// );

// const saveData = localStorage.getItem('feedback-form-state');
// console.log(saveData);

// const parsedData = JSON.parse(saveData);
// console.log(parsedData);

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

// -------------------------------------------------
// 1
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// --------------------------------------------------
// 1.2
function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
// ---------------------------------------------------

function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  if (saveMessage) {
    // console.log(saveMessage);
    // refs.textarea.value = saveMessage;
    refs.form.value = saveMessage;
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
}
console.log(formData);

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

const saveData = localStorage.getItem(STORAGE_KEY);
// console.log(STORAGE_KEY);

const parsedData = JSON.parse(saveData);
console.log(parsedData);
