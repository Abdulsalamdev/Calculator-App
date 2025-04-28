const inpute = document.getElementById("display");

// display inpute values
function appendToDisplay(value) {
  inpute.value += value;
}

// clear inpute values
function clearAll(value) {
  inpute.value = value;

  return "";
}

// clear single value
function clearOne() {
  let currentDisplay = inpute.value;
  inpute.value = currentDisplay.slice(0, currentDisplay.length - 1);
  return inpute.value;
}

// calculate result
function calculateResult() {
    try {
        const expression = inpute.value;
        
        // Allow only digits, operators and parentheses
        if (/^[0-9+\-*/().\s]+$/.test(expression)) {
          let result = eval(expression);
          inpute.value = result;
        } else {
          inpute.value = "Invalid input";
        }
      } catch (err) {
        inpute.value = "Error";
      }
}
