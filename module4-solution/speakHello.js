(function (window) {
    var speakHello = {};
    var greeting = "Hello";
  
    speakHello.speak = function (name) {
      console.log(greeting + " " + name);
    };
  
    window.speakHello = speakHello;
  })(window);
  