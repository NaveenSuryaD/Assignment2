(function (window) {
    var speakGoodBye = {};
    var greeting = "Goodbye";
  
    speakGoodBye.speak = function (name) {
      console.log(greeting + " " + name);
    };
  
    window.speakGoodBye = speakGoodBye;
  })(window);
  