export default class Inventory {
  constructor() {
    this.items = [];
    this.maxItems = 3;
  }

  addItem(item) {
    this.items.push(item);
  }
}