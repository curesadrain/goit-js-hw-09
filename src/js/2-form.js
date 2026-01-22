const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

refillFormData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
}

function refillFormData() {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    formData.email = parsedFormData.email;
    formData.message = parsedFormData.message;
    refs.email.value = parsedFormData.email;
    refs.message.value = parsedFormData.message;
  }
}
