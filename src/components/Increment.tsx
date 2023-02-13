import { observer } from "mobx-react-lite";
import store from "../store";

const Increment = () => {
  // const increaseValue = () => {
  //   store.count++;
  // };

  return <button onClick={store.increment}>Increment</button>;
};

export default observer(Increment);
