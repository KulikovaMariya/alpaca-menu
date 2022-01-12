import {testFunction} from './scripts/test';
testFunction();

const burger = document.querySelector('.js-burger');
const shadow = document.querySelector('.js-shadow');
const nav = document.querySelector('.js-nav');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('_active');
  shadow.classList.toggle('shadow--active');
  nav.classList.toggle('nav--active');
});


shadow.addEventListener('click', ()=>{
  burger.classList.remove('_active');
  shadow.classList.remove('shadow--active');
  nav.classList.remove('nav--active');
});