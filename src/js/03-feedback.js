import throttle from 'lodash.throttle';

// змінна з ключем для сховища
// об'єкт для данних сховища
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

// console.log(formData);

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// слухачі подій
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onEmailInput, 500));
refs.input.addEventListener('input', throttle(onTextareaInput, 500));

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
  formData = { email: '', message: '' };
}
// ---------------------------------------------------
function onEmailInput(evt) {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  formData.message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onTextareaInput(evt) {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  formData.email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// функція для збереження тексту в формі після перезавантаження
function populateText() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));
    refs.input.value = savedMassege.email;
    refs.textarea.value = savedMassege.message;
  }
}
