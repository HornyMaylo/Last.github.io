function subscribe() {
   document.querySelector(".layer__subscribe").style.display = "block";
   // Reset animation
   let el = document.querySelector(".layer__subscribe");
   el.style.animation = 'none';
   el.offsetHeight; /* trigger reflow */
   el.style.animation = null; 
}

function closeSub() {
   let el = document.querySelector(".layer__subscribe");
   el.style.animation = 'closeSub .4s linear forwards';
   setTimeout(() => document.querySelector(".layer__subscribe").style.display = "none", 400);
}