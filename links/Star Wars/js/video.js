function play() {
   let video = document.getElementById('trailerVideo');
   if (video.paused) {
      video.play();
      document.getElementById("playBtn").style.opacity = ".6";
      document.getElementById("stopBtn").style.opacity = ".6";
      document.getElementById('playBtn').classList.add("hide");
      document.getElementById('stopBtn').classList.remove("hide");
   } else {
      video.pause();
      document.getElementById("playBtn").style.opacity = "1";
      document.getElementById("stopBtn").style.opacity = "1";
      document.getElementById('playBtn').classList.remove("hide");
      document.getElementById("stopBtn").classList.add("hide");
   }
}