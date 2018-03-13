//trivia questions
function showDiv() {
    document.getElementById('showDiv');
 }
var triviaQuestions = [
    {
        question:"1.What animals sweat turns red when they're upset?",
        possibleAnswers:["rhino", "elephant", "hippo", "boar"],
        correctIndex: 2
    },
    {
        question:"2. Which phobia is the fear of having fun?",
        possibleAnswers:["Somniphobia", "Cherophobia", "Coulrophobia", "Ombrophobia"],
        correctIndex: 1
    },
    {
        question:"3.In 2015 more people were killed by doing this _______, than there were shark attacks",
        possibleAnswers:["Changing the radio", "eating", "singing", "taking a selfie"],
        correctIndex: 3
        
    },
    {
        question:"4. According to the first Austin Powers movie, what was Austin's middle name?",
        possibleAnswers:["luke", "mighty", "danger", "Powers"],
        correctIndex: 2
    },
    {
        question:"5.  How many bends does a paper clip have?",
        possibleAnswers:["4", "5", "3", "2"],
        correctIndex: 2
    }
];
//begin for loop for trivia questions
for (var i = 0; i < triviaQuestions.length; i++) {
                
    var theAnswers = triviaQuestions[i].possibleAnswers[triviaQuestions[i].correctIndex]
    console.log(theAnswers);
    //theQuestions = triviaQuestions
    console.log(triviaQuestions[i].question)
}

var number = 30;
        var intervalId;
        var userGuess;
        var count = 0;

        $("#start-game").on("click", function () {
            $("#show-number").hide();
            $("#question-holder").hide();
            console.log('hello world');
displayQuestion();
$("start-game").on("click", run);
$("#show-number").show();
$("#question-holder").delay(1000).show(0);

//run function
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    number--;
    $("#show-number").html("<h2> Time Remaining: " + number + " seconds </h2>");
    if (number === 0){
        stop();
        alert("Oh no! Time's up!")
    }
    function stop() {
        clearInterval(intervalId);
    }
    run();
};


function displayQuestion() {
                
    setInterval(function(){ $("#question-holder").html("<h2> " + [triviaQuestions[0].question] + " </h2>"); }, 1000);
    setInterval(function(){ $("#userGuess1").html("<h4> " + [triviaQuestions[0]. possibleAnswers[0]] + " </h4>"); }, 1000);
    setInterval(function(){ $("#userGuess2").html("<h4> " + [triviaQuestions[0]. possibleAnswers[1]] + " </h4>"); }, 1000);
    setInterval(function(){ $("#userGuess3").html("<h4> " + [triviaQuestions[0]. possibleAnswers[2]] + " </h4>"); }, 1000);
}


$("#userGuess1").click(function() {
    console.log('clicked on guess 1');
    alert("incorrect")
});
$("#userGuess2").click(function() {
    console.log('clicked on guess 2');
    alert("incorrect")
});
$("#userGuess3").click(function() {
    console.log('clicked on guess 3');
    alert("CORRECT")
});
});
      


// if (!$("input[name=q1]:checked").val() ||            
// !$("input[name=q2]:checked").val() ||            
// !$("input[name=q3]:checked").val() ||            
// !$("input[name=q4]:checked").val() ||            
// !$("input[name=q5]:checked").val() ||                      
// ) {            

