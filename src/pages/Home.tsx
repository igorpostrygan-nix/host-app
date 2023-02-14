import store from "host/store";
import { observer } from "mobx-react-lite";
import Increment from "remoteApp/Increment";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <h4>Host</h4>
        Store count: {store.count}
        <br />
        <button onClick={store.decrement}>Decrement</button>
      </div>
      <div className="app">
        <h4>Remote</h4>
        <Increment />
      </div>
    </div>
  );
};

export default observer(Home);
