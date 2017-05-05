import { combineReducers } from 'redux';
import states from './states';
import bills from './bills';
import votes from './votes';
import members from './members';

const rootReducer = combineReducers({
  members,
  bills,
  votes,
  states,
});

export default rootReducer;
