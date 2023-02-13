import { makeObservable, observable, action } from "mobx";

class Store {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
    });
  }

  increment = () => {
    this.count++;
  }
}

export default new Store()