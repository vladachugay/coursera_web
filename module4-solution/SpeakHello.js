(function (window) {
	var helloSpeaker = {
		speak : function() {

		}
	};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name)  {
	  console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
}) (window);