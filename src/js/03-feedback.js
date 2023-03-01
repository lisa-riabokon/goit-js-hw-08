import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = { message: '', email: '' };

console.log(formData);

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// const formEl = document.querySelector('.feedback-form');
// console.log(formEl);

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onEmailInput, 500));
refs.input.addEventListener('input', throttle(onTextareaInput, 500));
// refs.textarea.addEventListener('input', onEmailInput);
// refs.input.addEventListener('input', onTextareaInput);

populateText();

// -------------------------------------------------
// Відправка форми
function onFormSubmit(evt) {
  // Зупиняємо відправку форми за замовченням
  evt.preventDefault();
  // Виводимо у консоль данні відправки
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { message: '', email: '' };
}
// ---------------------------------------------------

function onTextareaInput(evt) {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  formData.message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onEmailInput(evt) {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  formData.email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));
    refs.textarea.value = savedMassege.message;
    refs.input.value = savedMassege.email;

    console.log(refs.input.value);
  }
}
