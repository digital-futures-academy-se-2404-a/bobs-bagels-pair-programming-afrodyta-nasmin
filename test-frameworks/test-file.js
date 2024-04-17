import { addItem } from "./index.js";
import { assertEquals, assertNaN } from "./test-frameworks.js";

//Arrange
let input1 = "orange";
let actual, result;
let basket = ['apple'];
let expected = ['apple', 'orange']

//Act
actual = addItem(input1, basket); //* Call the unit under test

//Assert
// result = assertEquals(JSON.stringify(actual), JSON.stringify(expected));
result = assertNaN(actual);

//Report
console.log(`Test result: ${result}`);
console.log(actual, expected);

