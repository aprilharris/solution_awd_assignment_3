/* generally, if you're UPDATING an element, you can use multiple jQuery methods on the same element to do this, list out your methods and separate them with a dot
using multiple methods on the same selector is known as "chaining"
in this example we're using
.text() loads the <div> element with the Correct/Wrong message
.css() colors the text green if correct/red if incorrect
at a time */

// 1. English Section:
$('.englishButton').click(function() {
	//take user's input and store it in variable called englishInput 
	let englishInput = $('.english').val();
	if (englishInput === 'Mon') {
		// display green 'Correct!' if the answer is correct
  $('.englishMessage').text('Correct!').css('color','green');
    	} else {
	// display red 'Wrong!' if the answer is incorrect
		$('.englishMessage').text('Wrong!').css('color','red');
	};
});

// 2. Social Studies section
$('.ssButton').click(function() {
	//take user's input and store it in variable called ssInput 
	let ssInput = $('.socialStudies').val();
	if (ssInput === 'Albany') {
		//display 'Correct!' if answer is correct
		$('.ssMessage').text('Correct!').css('color', 'green');
	} else {
		//display 'Wrong!' if answer is incorrect
		$('.ssMessage').text('Wrong!').css('color', 'red');
	};
});

// 3. Math section
$('.mathButton').click(function() {
  	//take user's input and store it in variable called mathInput 
	let mathInput = $('.math').val();
	// below, we are using the parseInt() function to convert the input value (a string) into a number
	mathInput = parseInt(mathInput);
	if (mathInput === 30) {
		$('.mathMessage').text('Correct!').css('color', 'green');
	} else {
		$('.mathMessage').text('Wrong!').css('color','red');
	};
});

// 4. Science section
$('.scienceButton').click(function() {
	let scienceInput = $('.science').val();
	if ( (scienceInput === 'solid') || (scienceInput=='Solid') ) {
	$('.scienceMessage').text('Correct!').css('color','green');
	} else {
		$('.scienceMessage').text('Wrong!').css('color', 'red');
	};
});