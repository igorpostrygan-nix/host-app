import store from "host/store";
import { observer } from "mobx-react-lite";
import Increment from "remoteApp/Increment";

const Home = () => {
  return (
    <div className="App">
      Store count: {store.count}
      <Increment />
    </div>
  );
};

export default observer(Home);
