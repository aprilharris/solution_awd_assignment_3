// 1. English Section:
 $(".englishButton").click(function() {

   //take user's input and store it in variable called englishInput 
    let englishInput = $(".english").val();

   if (englishInput === 'Mon') {
    // display this text if the answer is correct
    $(".englishMessage").text("Correct!");
   } else {

    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
   };
    
});


// 2. Social Studies section
 $(".ssButton").click(function() {

   //take user's input and store it in variable called ssInput 
    let ssInput = $(".socialStudies").val();
   
if (ssInput === 'Albany') {
  
    $(".ssMessage").text("Correct!");
  } else {
        $(".ssMessage").text("Not quite. Try again.");
  }

});


// 3. Math section
$(".mathButton").click(function(){
    let mathInput = $(".math").val();

     //take user's input and store it in variable called mathInput 
    // below, we are using the parseInt() function to convert the input value (a string) into a number
    mathInput = parseInt(mathInput);

  if (mathInput === 30) {
        $(".mathMessage").text("Correct!");
  } else {
        $(".mathMessage").text("Not quite. Try again.");
  }
});


// 4. Science section
$(".scienceButton").click(function() {
  let scienceInput = $('.science').val();

  if (scienceInput === 'solid') {
    $(".scienceMessage").text('Correct!');
  } else {
    $(".scienceMessage").text("Not quite. Try again.");
  }
});
