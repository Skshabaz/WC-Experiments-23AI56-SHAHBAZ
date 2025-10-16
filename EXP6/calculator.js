// Simple Calculator using Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("======================================");
console.log("        Simple Calculator (Node.js)   ");
console.log("======================================");
console.log("Available operations: +  -  *  /");
console.log("--------------------------------------");

readline.question("Enter first number: ", (num1) => {
  readline.question("Enter operator (+, -, *, /): ", (operator) => {
    readline.question("Enter second number: ", (num2) => {

      let result;
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      if (isNaN(num1) || isNaN(num2)) {
        console.log("❌ Please enter valid numbers!");
        readline.close();
        return;
      }

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "❌ Cannot divide by zero!";
          break;
        default:
          result = "❌ Invalid operator!";
      }

      console.log(`\n✅ Result: ${result}`);
      readline.close();
    });
  });
});
