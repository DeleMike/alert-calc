/**
 * Calls the calculator function
 */
const callCalculator = () => {
   var isValid = false;
   var isOpValid = false;
   var operator;
   const operators = ['+', '-', '*', '/'];
   var calculation = 0;

   // validate input values
   while (!isValid) {
      var val_one = prompt('Please enter the first number: ');
      var val_two = prompt('Please enter the second number: ');

      if (isNaN(val_one) || isNaN(val_two)) {
         //alert user for invalid data
         alert('Please enter a valid number')
      } else {
         isValid = true;
      }
   }

   while (!isOpValid) {
      //ask for operator
      operator = prompt('Please choose an operation from the list of operators you want to perform [ addition( + ), subtraction( - ), multiplication( * ), division( / ) ]');

      if (operators.includes(operator)) {
         console.log('valid');
         isOpValid = true;
      }else{
         console.log('invalid');
         isOpValid = false;
      }

   } 
   
   //perform calculation
   val_one = parseInt(val_one);
   val_two = parseInt(val_two);
   switch (operator) {
      case '+':
         calculation = val_one + val_two;
         break;
      case '-':
         calculation = val_one - val_two;
         break;
      case '*':
         calculation = val_one * val_two;
         break
      case '/':
         calculation = val_one / val_two;
         break;
      default:
         break;
   }

   //display result
   alert(
      `${val_one} ${operator} ${val_two} = ${calculation}`
   ) 


}

callCalculator()