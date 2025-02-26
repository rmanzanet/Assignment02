let grade = parseInt(prompt("Enter a number between 1 and 100:"), 10);  //Collect a number between 1 and 100

if (isNaN(grade) || grade < 1 || grade > 100) {
    console.log("Only numbers between 1 and 100 are accepted.");
} else if (grade >= 90 && grade <= 100) {  //If the score is between 90 and 100, write out “You received an A” into the console.
    console.log("You received an A");
} else if (grade >= 80 && grade <= 89) {  //If the score is between 80 and 89, write out “You received a B” into the console.
    console.log("You received a B");
} else if (grade >= 70 && grade <= 79) {  //If the score is between 70 and 79, write out “You received a C” into the console.
    console.log("You received a C");
} else if (grade >= 60 && grade <= 69) {  //If the score is between 60 and 69, write out “You received a D” into the console.
    console.log("You received a D");
} else {
    console.log("You received an F");  //If the score is less than 60, write out “You received an F” into the console.  This is the default value if the number doesn't match the above.
}