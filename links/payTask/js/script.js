// input

const elem = document.getElementById('input')
const err_1 = document.getElementById('errors')
const err_2 = document.getElementById('symbols')

elem.addEventListener('input', (event) => {
   err_1.innerHTML = '';
   if(elem.value.length <= 4) err_1.innerHTML = 'too few characters!';
   if(elem.value.length >= 12) err_1.innerHTML = 'too many characters!';
   for (let i = 0; i < elem.value.length; i++) {
      if(elem.value[i] === '!' || elem.value[i] === '@' || elem.value[i] === '#' || elem.value[i] === '$' || elem.value[i] === '%' || elem.value[i] === '^' || elem.value[i] === '&' || elem.value[i] === '*' || elem.value[i] === ')' || elem.value[i] === '(') {
         err_2.innerHTML = 'forbidden symbol';
         break
      } else err_2.innerHTML = '';
   }
   if(elem.value.length == 0) {
      err_1.innerHTML = '';
      err_2.innerHTML = '';
   }
})

// menu

const menu = document.querySelector('.menu')
const menuWindow = document.querySelector('.menuWindow')

menu.addEventListener('click', (event) => {
   menuWindow.classList.toggle('hide')
})