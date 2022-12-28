export default class Inventory {
  constructor() {
    this.items = [];
    this.maxItems = 3;
  }

  addItem(item) {
    if (this.items.length >= this.maxItems) {
      return;
    }
    this.items.push(item);
  }
}