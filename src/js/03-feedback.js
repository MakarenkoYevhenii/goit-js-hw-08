const contactFormEl = document.querySelector('.feedback-form');
let formData = {};

contactFormEl.addEventListener('input', event => {
  const target = event.target;

  formData[target.name] = target.value;

    localStorage.setItem('formData', JSON.stringify(formData));
//   localStorageApi.save('formData', formData);
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();
  if(formData.message&&formData.email){
      console.log(formData)
      event.target.reset();
      localStorage.removeItem('formData');
    }
    formData={};
//   localStorageApi.remove('formData');
});

const fillFormFields = () => {
  if (!localStorage.length) {
    return;
  }
    const localStorageFormData = JSON.parse(localStorage.getItem('formData'));
//   const localStorageFormData = localStorageApi.load('formData');
  const keys = Object.keys(localStorageFormData);

  for (const key of keys) {
    contactFormEl.elements[key].value = localStorageFormData[key];
    formData[key]=localStorageFormData[key]
  }
};

fillFormFields();