
window.addEventListener('resize', function(event) {
   if (document.documentElement.clientWidth >= 2303) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/characters/characters2560.js"; 
      document.getElementsByTagName("head")[0].appendChild(script);
   }
   if (document.documentElement.clientWidth >= 1920) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/characters/characters1920.js"; 
      document.getElementsByTagName("head")[0].appendChild(script);
   }
   if (document.documentElement.clientWidth >= 1440) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/characters/characters1440.js"; 
      document.getElementsByTagName("head")[0].appendChild(script);
   }
   if (document.documentElement.clientWidth >= 1200) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/characters/characters1200.js"; 
      document.getElementsByTagName("head")[0].appendChild(script);
   }
   if (document.documentElement.clientWidth >= 799) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/characters/characters800.js"; 
      document.getElementsByTagName("head")[0].appendChild(script);
   }
   if (document.documentElement.clientWidth >= 499) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/characters/characters500.js"; 
      document.getElementsByTagName("head")[0].appendChild(script);
   }
}, true);