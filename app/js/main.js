import {testFunction} from './scripts/test';
testFunction();

const btn = document.querySelector('.header__burger');

btn.onclick = () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav--active')
};