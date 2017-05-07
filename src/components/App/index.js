import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  Scene,
  Router,
} from 'react-native-router-flux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../../reducers';
import MenuHome from '../MenuHome';

const store = createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="home" component={MenuHome} title="Login" />
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
