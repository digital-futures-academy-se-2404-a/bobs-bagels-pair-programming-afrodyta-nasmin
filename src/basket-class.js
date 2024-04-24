export default class Basket {
  #basketItems = [];

  getBasketItems = () => {
    return this.#basketItems;
  };

  addItem = (item) => {
    return this.#basketItems.push(item);
  };

  removeItem = (item) => {
    return this.#basketItems.pop(item);
  };

  checkFull = (basketItems) => {
    return basketItems.length >= 3;
  };
}
