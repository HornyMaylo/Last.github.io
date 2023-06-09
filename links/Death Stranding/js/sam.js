let bg = document.querySelector('.bg');
let sam = document.querySelector('.sam');

document.onmousemove = (e)=>{
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;

   bg.style.transform = "translate(-" + x*10 + "px, -" + y*10 + "px";
   sam.style.transform = "translate(-" + x*70 + "px, -" + y*70 + "px";
};