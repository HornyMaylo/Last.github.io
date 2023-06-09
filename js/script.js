// Navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};

// Scroll active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top <= offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         })
      }
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
   });

   // Dinamic numeric

   let trigger = document.querySelector('.linkTrigger');

   let year = document.getElementById('YearOfExperience');
   let projects = document.getElementById('Projects');
   let clients = document.getElementById('Clients');

   if(trigger.classList.contains('active')) {
      let year_num = 3;
      let projects_num = 5;
      let clients_num = 1;

      year.innerText = year_num;
      projects.innerText = `${projects_num}k+`;
      clients.innerText = `${clients_num}k+`;

      let year_tick = setInterval(() => {
         year.innerText = year_num;
         if(year_num == 13) {
            clearInterval(year_tick);
         }
         year_num++;
      }, 300);

      let projects_tick = setInterval(() => {
         projects.innerText = `${projects_num}k+`;
         if(projects_num == 15) {
            clearInterval(projects_tick);
         }
         projects_num++;
      }, 600);

      let clients_tick = setInterval(() => {
         clients.innerText = `${clients_num}k+`;
         if(clients_num == 12) {
            clearInterval(clients_tick);
         }
         clients_num++;
      }, 450);
   } else {
      year.innerText = '3';
      projects.innerText = '5k+';
      clients.innerText = '1';
   }

   // Sticky navbar

   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);
}

// Chanding Text

const typed = new Typed('.changingText', {
   strings: ['Frontend Developer', 'Bachaor student', 'Freelancer'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

