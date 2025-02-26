let firstNum = +prompt("Enter the first integer:");
        let secondNum = +prompt("Enter the second integer:");
        
        document.write(firstNum > secondNum ? `The larger number is: ${firstNum}` :           //Checks if the first number is bigger than the second and prints the first number
                       secondNum > firstNum ? `The larger number is: ${secondNum}` :          //Checks if the second number is bigger than the second and prints the second number
                       `You have the same number: ${firstNum}`);                              //Both numbers are the same