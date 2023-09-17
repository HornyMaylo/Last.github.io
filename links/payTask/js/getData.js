const elems = document.querySelectorAll('.data');
fetch('https://baconipsum.com/api/?type=lucky')
   .then(response => response.json())
   .then((commits) => {
      for (let i = 0; i < elems.length; i++) {
         elems[i].innerHTML = commits[i]
      }
   })