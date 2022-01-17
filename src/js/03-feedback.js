import { set, throttle } from 'lodash';

const contactFormEl = document.querySelector('.feedback-form');

const fillEmailField = () => {
if (!localStorage.length) {
  return;
}
  const keys = Object.keys(localStorage);

  for (const key of keys) {
    contactFormEl.elements[key].value = localStorage.getItem(key);
  }
};

const proslushka = contactFormEl.addEventListener('input', throttle((event)  => {
    const target = event.target;
    localStorage.setItem(target.name, target.value);
},500));

contactFormEl.addEventListener('submit', event => {
    event.preventDefault();
    
    event.target.reset();
    localStorage.clear();
});
fillEmailField();