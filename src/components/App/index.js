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
import MenuSelectChamber from '../MenuSelectChamber';
import StatesList from '../StatesList';

const store = createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="menuHome" component={MenuHome} title="Home Nav" initial={true} />
          <Scene key="menuSelectChamber" component={MenuSelectChamber} title="Select a Chamber" />
          <Scene key="statesList" component={StatesList} title="Select a State" />
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
