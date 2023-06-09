let srcs = ["sam.mp4", "Fragile.mp4", "deadman.mp4", "higs.mp4"];
let names = [
   ["Sam Porter Bridges", "Norman Redus"],
   ["Frigile", "Lea Seydoux"],
   ["Deadman", "Guillermo del Toro"],
   ["Higgs Monaghan", "Troy Bake"]
];

let moreInfoImgSrcs = [
   ["img/samFront.png", "img/samBack.png"],
   ["img/frigile.png", "img/frigelSketch.png"],
   ["img/deadman.png", "img/deadmanSketch.png"],
   ["img/higgs.png", "img/higgsSketch.png"]
];
let counter = 0;
let video = document.querySelector('.characters__video');
let leftArrow = document.querySelector('.arrow__left');
leftArrow.style.display = "none";
let i;

function nextCharacter() {
   i=0;
   counter+=1;
   i = counter;
   if(counter >= 1) {
      leftArrow.style.display = "block";
   }
   video.src=srcs[counter];
   if(counter === 1) {
      document.querySelector(".characterName").innerHTML = names[1][0];
      document.querySelector(".rightNames").innerHTML = names[2][0];
      document.querySelector(".leftNames").innerHTML = names[0][0];
      document.querySelector(".actorName").innerHTML = names[1][1];
      document.querySelector(".counter").innerHTML = "02";
   }
   if(counter === 2) {
      document.querySelector(".characterName").innerHTML = names[2][0];
      document.querySelector(".rightNames").innerHTML = names[3][0];
      document.querySelector(".leftNames").innerHTML = names[1][0];
      document.querySelector(".actorName").innerHTML = names[2][1];
      document.querySelector(".counter").innerHTML = "03";
   }
   if(counter === 3) {
      document.querySelector(".characterName").innerHTML = names[3][0];
      document.querySelector(".leftNames").innerHTML = names[2][0];
      document.querySelector(".actorName").innerHTML = names[3][1];
      document.querySelector(".arrow__right").style.display = "none";
      document.querySelector(".counter").innerHTML = "04";
   }

   // Reset animation
   let el = document.querySelector('.characters__video');
   el.style.animation = 'none';
   el.offsetHeight; /* trigger reflow */
   el.style.animation = null; 
}

function prevCharacter() {
   i=0;
   counter-=1;
   i = counter;
   if(counter <= 0) {
      leftArrow.style.display = "none";
   }
   if(counter === 0) {
      document.querySelector(".characterName").innerHTML = names[0][0];
      document.querySelector(".rightNames").innerHTML = names[1][0];
      document.querySelector(".actorName").innerHTML = names[0][1];
      document.querySelector(".counter").innerHTML = "01";
   }
   if(counter === 1) {
      document.querySelector(".characterName").innerHTML = names[1][0];
      document.querySelector(".rightNames").innerHTML = names[2][0];
      document.querySelector(".leftNames").innerHTML = names[0][0];
      document.querySelector(".actorName").innerHTML = names[1][1];
      document.querySelector(".counter").innerHTML = "02";
   }
   if(counter === 2) {
      document.querySelector(".characterName").innerHTML = names[2][0];
      document.querySelector(".rightNames").innerHTML = names[3][0];
      document.querySelector(".leftNames").innerHTML = names[1][0];
      document.querySelector(".actorName").innerHTML = names[2][1];
      document.querySelector(".arrow__right").style.display = "block";
      document.querySelector(".counter").innerHTML = "03";
   }
   video.src=srcs[counter];

   // Reset animation
   let el = document.querySelector('.characters__video');
   el.style.animation = 'none';
   el.offsetHeight; /* trigger reflow */
   el.style.animation = null; 
}

function moreInfo() {
   document.querySelector(".characterHeroInfo").style.display = "block";

   if(counter === 0) {
      // Вставка имени героя и изменение картинок
      document.querySelector(".contentTitle").innerHTML = names[0][0];
      document.querySelector(".characterFront").src = moreInfoImgSrcs[0][0];
      document.querySelector(".characterBack").src = moreInfoImgSrcs[0][1];
      document.querySelector(".lastAdjustment").style.width = "29vw";
      document.querySelector(".lastAdjustment").style.left = "38vw";
      document.querySelector(".lastAdjustment").style.top = "4vw";
      // Редактирование положения второй картинки
      document.querySelector(".adjustment").style.top = "10vw";
      document.querySelector(".adjustment").style.left = "70vw";
      document.querySelector(".adjustment").style.width = "29vw";
            // Редактирование положение описалок и их содержимого
      // #1
      document.querySelector(".diy").style.top = "8vh";
      document.querySelector(".diy").style.left = "62vw";
      document.querySelector(".diy").style.display = "flex";
      document.getElementById('firstDescriptor').innerHTML = "diy";
      // #2
      document.querySelector(".bb").style.top = "22vh";
      document.querySelector(".bb").style.left = "37vw";
      document.querySelector(".bb").style.display = "flex";
      document.getElementById('secondDescriptor').innerHTML = "bb";
      // #3
      document.querySelector(".suitcase").style.top = "46vh";
      document.querySelector(".suitcase").style.left = "63vw";
      document.querySelector(".suitcase").style.display = "flex";
      document.getElementById('thirdDescriptor').innerHTML = "suitcase";
      // #4
      document.querySelector(".leg").style.top = "66vh";
      document.querySelector(".leg").style.left = "74vw";
      document.querySelector(".leg").style.display = "flex";
      document.getElementById('fourDescriptor').innerHTML = "boots";
      // #5
      document.querySelector(".equipment").style.top = "12vh";
      document.querySelector(".equipment").style.left = "71vw";
      document.querySelector(".equipment").style.display = "flex";
      document.getElementById('fivesDescriptor').innerHTML = "equipment";
   }

   if(counter === 1) {
      // Вставка имени героя и изменение картинок, изменение положения первой картинки
      document.querySelector(".contentTitle").innerHTML = names[1][0];
      document.querySelector(".characterFront").src = moreInfoImgSrcs[1][0];
      document.querySelector(".characterBack").src = moreInfoImgSrcs[1][1];
      document.querySelector(".lastAdjustment").style.width = "29vw";
      document.querySelector(".lastAdjustment").style.left = "38vw";
      document.querySelector(".lastAdjustment").style.top = "-4vw";
      // Редактирование положения второй картинки
      document.querySelector(".adjustment").style.top = "4vw";
      document.querySelector(".adjustment").style.left = "70vw";
      document.querySelector(".adjustment").style.width = "31vw";
      // Редактирование положение описалок и их содержимого
      // #1
      document.querySelector(".diy").style.top = "-14vh";
      document.querySelector(".diy").style.left = "76vw";
      document.querySelector(".diy").style.display = "none";
      document.getElementById('firstDescriptor').innerHTML = "umbrella";
      // #2
      document.querySelector(".bb").style.top = "42vh";
      document.querySelector(".bb").style.left = "43vw";
      document.querySelector(".bb").style.display = "flex";
      document.getElementById('secondDescriptor').innerHTML = "suitcase";
      // #3
      document.querySelector(".suitcase").style.top = "42vh";
      document.querySelector(".suitcase").style.left = "62vw";
      document.querySelector(".suitcase").style.display = "flex";
      document.getElementById('thirdDescriptor').innerHTML = "Frigel";
      // #4
      document.querySelector(".leg").style.top = "58vh";
      document.querySelector(".leg").style.left = "69vw";
      document.querySelector(".leg").style.display = "flex";
      document.getElementById('fourDescriptor').innerHTML = "antigravitation boots";
      // #5
      document.querySelector(".equipment").style.top = "6vh";
      document.querySelector(".equipment").style.left = "71vw";
      document.querySelector(".bb").style.display = "flex";
      document.getElementById('fivesDescriptor').innerHTML = "umbrella";
   }
   if(counter === 2) {
      // Вставка имени героя и изменение картинок
      document.querySelector(".contentTitle").innerHTML = names[2][0];
      document.querySelector(".characterFront").src = moreInfoImgSrcs[2][0];
      document.querySelector(".characterBack").src = moreInfoImgSrcs[2][1];
      document.querySelector(".lastAdjustment").style.width = "27vw";
      document.querySelector(".lastAdjustment").style.left = "42vw";
      document.querySelector(".lastAdjustment").style.top = "2vw";
      // Редактирование положения второй картинки
      document.querySelector(".adjustment").style.top = "0vw";
      document.querySelector(".adjustment").style.left = "74vw";
      document.querySelector(".adjustment").style.width = "24vw";
      // Редактирование положение описалок и их содержимого
      // #1
      document.querySelector(".diy").style.top = "8vh";
      document.querySelector(".diy").style.left = "60vw";
      document.querySelector(".diy").style.display = "flex";
      document.getElementById('firstDescriptor').innerHTML = "bb constuctor";
      // #2
      document.querySelector(".bb").style.top = "58vh";
      document.querySelector(".bb").style.left = "70vw";
      document.querySelector(".bb").style.display = "none";
      document.getElementById('secondDescriptor').innerHTML = "suitcase";
      // #3
      document.querySelector(".suitcase").style.top = "42vh";
      document.querySelector(".suitcase").style.left = "90vw";
      document.getElementById('thirdDescriptor').innerHTML = "handcuffs";
      // #4
      document.querySelector(".leg").style.top = "68vh";
      document.querySelector(".leg").style.left = "136vh";
      document.querySelector(".leg").style.display = "none";
      document.getElementById('fourDescriptor').innerHTML = "antigravitation boots";
      // #5
      document.querySelector(".equipment").style.top = "9vh";
      document.querySelector(".equipment").style.left = "139vh";
      document.querySelector(".equipment").style.display = "none";
      document.getElementById('fivesDescriptor').innerHTML = "umbrella";
   }

   if(counter === 3) {
      // Вставка имени героя и изменение картинок
      document.querySelector(".contentTitle").innerHTML = names[3][0];
      document.querySelector(".characterFront").src = moreInfoImgSrcs[3][0];
      document.querySelector(".characterBack").src = moreInfoImgSrcs[3][1];
      document.querySelector(".lastAdjustment").style.width = "34vw";
      document.querySelector(".lastAdjustment").style.left = "36vw";
      document.querySelector(".lastAdjustment").style.top = "6vw";
      // Редактирование положения второй картинки
      document.querySelector(".adjustment").style.top = "8vw";
      document.querySelector(".adjustment").style.left = "70vw";
      document.querySelector(".adjustment").style.width = "28vw";
      // Редактирование положение описалок и их содержимого
      // #1
      document.querySelector(".diy").style.display = "flex";
      document.querySelector(".diy").style.top = "20vh";
      document.querySelector(".diy").style.left = "58vw";
      document.getElementById('firstDescriptor').innerHTML = "special bb";
      // #2
      document.querySelector(".bb").style.display = "flex";
      document.querySelector(".bb").style.top = "52vh";
      document.querySelector(".bb").style.left = "42vw";
      document.getElementById('secondDescriptor').innerHTML = "ability to fly";
      // #3
      document.querySelector(".suitcase").style.display = "flex";
      document.querySelector(".suitcase").style.top = "13vh";
      document.querySelector(".suitcase").style.left = "93vw";
      document.getElementById('thirdDescriptor').innerHTML = "Odradek mkI";
      // #4
      document.querySelector(".leg").style.display = "flex";
      document.querySelector(".leg").style.top = "48vh";
      document.querySelector(".leg").style.left = "70vw";
      document.getElementById('fourDescriptor').innerHTML = "combat suit";
      // #5
      document.querySelector(".equipment").style.display = "flex";
      document.querySelector(".equipment").style.top = "12vh";
      document.querySelector(".equipment").style.left = "72vw";
      document.getElementById('fivesDescriptor').innerHTML = "festal mask";
   }

   // Reset animation
   let el = document.querySelector('.characters__video');
   el.style.animation = 'none';
   el.offsetHeight; /* trigger reflow */
   el.style.animation = null; 
}

function closeInfo() {
   document.querySelector(".characterHeroInfo").style.display = "none";

   // Reset animation
   let el = document.querySelector('.characters__video');
   el.style.animation = 'none';
   el.offsetHeight; /* trigger reflow */
   el.style.animation = null; 
}