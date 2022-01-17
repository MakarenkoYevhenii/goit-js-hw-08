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

throttle(proslushka,2)
const proslushka = contactFormEl.addEventListener('input', event => {
    const target = event.target;
    localStorage.setItem(target.name, target.value);
});

contactFormEl.addEventListener('submit', event => {
    event.preventDefault();
    
    event.target.reset();
    localStorage.clear();
});
fillEmailField();