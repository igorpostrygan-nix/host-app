import store from 'host/store';
import runtimeStore from '../store';
import { observer } from 'mobx-react-lite';
import Increment from 'remoteApp/Increment';

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='app'>
          <h4>Host</h4>
          Store count: {store.count}
          <br />
          <button onClick={store.decrement}>Decrement</button>
        </div>
        <div className='app'>
          <h4>Remote</h4>
          <Increment />
        </div>
      </div>
      <div className='wrapper'>
        <div className='app'>
          <h4>Host (runtime)</h4>
          Store count: {runtimeStore.count}
          <br />
          <button onClick={runtimeStore.decrement}>Decrement</button>
        </div>
        <div className='app'>
          <h4>Remote</h4>
          <Increment globalStore={runtimeStore} />
        </div>
      </div>
    </>
  );
};

export default observer(Home);
