"use strict";
const toggle = document.querySelectorAll('input[type="radio"]');
const btnDark = document.querySelector('#dark');
const btnLight = document.querySelector('#light');

const setDarkScheme = () => document.body.classList.add('dark');
const removeDarkScheme = () => document.body.classList.remove('dark');
const setColorScheme = () => {
  (localStorage.getItem('colorScheme')=="dark") ? (setDarkScheme(), btnDark.click()) :
  (localStorage.getItem('colorScheme')=="light") ? (removeDarkScheme(),btnLight.click()) : "";
}
setColorScheme();
toggle.forEach(btn =>{
  btn.addEventListener('click',(e)=>{
    (btnDark.checked) ? (localStorage.setItem('colorScheme','dark'), setDarkScheme()) :
    (btnLight.checked) ? (localStorage.setItem('colorScheme','light'), removeDarkScheme()) : "";
  });
})

