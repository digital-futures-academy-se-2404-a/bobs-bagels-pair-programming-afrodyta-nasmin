import basket from "../src/basket.js";
import { assertEquals } from "./test-frameworks/test-frameworks.js";
import { item1, item2 } from "../src/item.js";

// AFTER EACH Function
const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  basket.basketItems = [];
};

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

afterEach();

//! STORY-2
console.log(`Test 2`);
console.log(`==================`);
console.log(
  `Remove item to basket using RemoveItem and expect array (basketItems) has decreased in length by 1`
);
//Arrange
basket.addItem(item1);
basket.addItem(item1);
basket.addItem(item1);
basket.addItem(item1);
expected = basket.basketItems.length - 1;
actual, result;

//Act

basket.removeItem(item1);
actual = basket.basketItems.length; //* Call the unit under test

//Assert
result = assertEquals(actual, expected);
// result = assertNaN(actual);

//Report
console.log(`Test result: ${result}`);
console.log(`Test result: `, item1);
console.log(` this is actual ${actual}, this is expected ${expected}`);
console.log(`==================`);
