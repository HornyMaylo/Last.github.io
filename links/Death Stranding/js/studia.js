function play() {
   let video = document.getElementById('devVideo');
   if (video.paused) {
      video.play();
      document.querySelector(".studia__videoDecorationPlayWrapper").style.opacity = ".6";
      document.getElementById('videoDecor1').classList.add("hide");
      document.getElementById('videoDecor2').classList.add("hide");
      document.querySelector(".studia__videoDecorationLine3").classList.add("hide");
      document.querySelector(".studia__videoDecorationLine4").classList.remove("hide");
      document.querySelector(".studia__videoDecorationLine5").classList.remove("hide");
   } else {
      video.pause();
      document.querySelector(".studia__videoDecorationPlayWrapper").style.opacity = "1";
      document.getElementById('videoDecor1').classList.remove("hide");
      document.getElementById('videoDecor2').classList.remove("hide");
      document.querySelector(".studia__videoDecorationLine3").classList.remove("hide");
      document.querySelector(".studia__videoDecorationLine4").classList.add("hide");
      document.querySelector(".studia__videoDecorationLine5").classList.add("hide");
   }
}