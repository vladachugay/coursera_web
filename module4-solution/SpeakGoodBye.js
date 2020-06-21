( function (window) {
	var byeSpeaker = { 
		speak : function speak() {
			
		}
	};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
} ) (window);