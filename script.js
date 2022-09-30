// 1. English Section:
$(".englishButton").click(function() {
	//take user's input and store it in variable called englishInput 
	let englishInput = $(".english").val();
	if (englishInput === 'Mon') {
		// display "Correct!" if the answer is correct
		$(".englishMessage").text("Correct!");
		//make the "Correct" message "green"
		$(".englishMessage").css("color", "green");
	} else {
		// display "Wrong!" if the answer is incorrect
		$(".englishMessage").text("Wrong!");
		//make the "Wrong!" message "red"
		// $(".englishMessage").css("color", "red");
	};
});
// 2. Social Studies section
$(".ssButton").click(function() {
	//take user's input and store it in variable called ssInput 
	let ssInput = $(".socialStudies").val();
	if (ssInput === 'Albany') {
		//display "Correct!" if answer is correct
		$(".ssMessage").text("Correct!");
		//make the "Correct" message "green"
		// $(".ssMessage").css("color", "green");
	} else {
		//display "Wrong!" if answer is correct
		$(".ssMessage").text("Wrong!");
		//make the "Wrong!" message "red"
		// $(".ssMessage").css("color", "red");
	}
});
// 3. Math section
$(".mathButton").click(function() {
	let mathInput = $(".math").val();
	//take user's input and store it in variable called mathInput 
	// below, we are using the parseInt() function to convert the input value (a string) into a number
	mathInput = parseInt(mathInput);
	if (mathInput === 30) {
		$(".mathMessage").text("Correct!");
		//make the "Correct" message "green"
		$(".mathMessage").css("color", "green");
	} else {
		$(".mathMessage").text("Wrong!");
		//make the "Wrong!" message "red"
		$(".mathMessage").css("color", "red");
	}
});
// 4. Science section
$(".scienceButton").click(function() {
	let scienceInput = $('.science').val();
	if (scienceInput === "solid") {
		$(".scienceMessage").text("Correct!");
		//make the "Correct" message "green"
		$(".scienceMessage").css("color", "green");
	} else {
		$(".scienceMessage").text("Wrong!");
		//make the "Wrong!" message "red"
		$(".scienceMessage").css("color", "red");
	}
});