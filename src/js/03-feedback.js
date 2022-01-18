import { set, throttle } from 'lodash';


const contactFormEl = document.querySelector('.feedback-form');
const formData = {};

contactFormEl.addEventListener('input', throttle(event => {
    const target = event.target;
  
    formData[target.name] = target.value;
  
      localStorage.setItem('formData', JSON.stringify(formData));
  //   localStorageApi.save('formData', formData);
  },500));

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();
  if(formData.message&&formData.email){
    console.log(formData);}
  event.target.reset();
    localStorage.removeItem('formData');
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
  }
};

