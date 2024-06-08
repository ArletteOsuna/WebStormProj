
    function checkAnswers() {

    let numCorrect = 0;
    let numWrong = 0;

    let answer1 = document.getElementById("movie").value; //user input
    if (answer1 === "Iron-Man") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText1').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect').innerHTML = "Incorrect"; //Display incorrect
}
    let answer2 = document.getElementById("villain").value; //user input
    if (answer2 === "Mysterio") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText2').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect1').innerHTML = "Incorrect"; //Display incorrect
}

    let answer3 = document.getElementById("actress").value; //user input
    if (answer3 === "Scarlett Johansson") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText3').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect2').innerHTML = "Incorrect"; //Display incorrect
}

    let answer4 = document.getElementById("image").value; //user input
    if (answer4 === "Spider-Man: No Way Home") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText4').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect3').innerHTML = "Incorrect"; //Display incorrect
}

    let answer5 = document.getElementById("groot").value; //user input
    if (answer5 === "Vin Diesel") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText5').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect4').innerHTML = "Incorrect"; //Display incorrect
}

    let answer6 = document.getElementById("thanosWords").value; //user input
    if (answer6 === "I am inevitable") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText6').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect5').innerHTML = "Incorrect"; //Display incorrect
}

    let answer7 = document.getElementById("Wanda").value; //user input
    if (answer7 === "Vision") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText7').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect6').innerHTML = "Incorrect"; //Display incorrect
}

    let answer8 = document.getElementById("thor").value; //user input
    if (answer8 === "Hela") { //Correct Answer
    numCorrect += 1;
    document.getElementById('updateText8').innerHTML = "Correct!"; //Display correct
}
    else{
    numWrong += 1;
    document.getElementById('incorrect7').innerHTML = "Incorrect"; //Display incorrect
}

    let score = numCorrect/(numWrong+numCorrect);

    document.getElementById('result').innerHTML = "You got " + numCorrect + " correct :)"; //Display number of correct answers
    document.getElementById('wrong').innerHTML = "You got " + numWrong + " wrong :("; //Display number of wrong answers
    document.getElementById('score').innerHTML = "Your score (%) is " + score.toFixed(2)*100 + "%"; //Displays score


}

