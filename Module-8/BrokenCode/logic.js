// When the factButton is clicked...
$("#factButton").on("click", function() {
	// we generate a random fact about boo
	var number = Math.floor((Math.random() * booFactsArray.length));
	// we display the fact from the booFactsArray that is in the random position we just generated
	$("#factText").text(booFactsArray[number])
})
//This list contains facts about Boo...
var booFactsArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//This Changes the font to pink when 
$("#textPink").on("click", function() {
	// you click the "pink" button...
	$("#funText").css("color", "pink")
})

//This Changes the font to orange when 
$("#textOrange").on("click", function() {
	// you click the "orange" button...
$("#funText").css("color", "orange")
})

//This Changes the font to green when 
$("#textGreen").on("click", function() {
	// you click the "green" button...
	$("#funText").css("color", "green")
})

//when you click the boxGrow button...
$("#boxGrow").on("click", function() {
//the image grows...
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//when you click the boxShrink button...
$("#boxShrink").on("click", function() {
	//The image shrinks..
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})