import basket from "../src/basket.js";
import { assertEquals } from "./test-frameworks/test-frameworks.js";
import { item1, item2 } from "../src/item.js";

//! STORY-1
console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Add item to basket using addItem and expect array (basketItems) has increased in length by 1`
);
//Arrange
let expected = basket.basketItems.length + 1;
let actual, result;

//Act
basket.addItem(item1);
actual = basket.basketItems.length; //* Call the unit under test

//Assert
result = assertEquals(actual, expected);
// result = assertNaN(actual);

//Report
console.log(`Test result: ${result}`);
console.log(`Test result: `, item1);
console.log(` this is actual ${actual}, this is expected ${expected}`);
console.log(`==================`);
