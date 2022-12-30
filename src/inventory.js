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

removeItem(itemName) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].name === itemName) {
    this.items.splice(i,1)
    return;
    }
  }
  }
}