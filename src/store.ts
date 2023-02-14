import { makeObservable, observable, action } from "mobx";

class Store {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
    });
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}

export default new Store();
