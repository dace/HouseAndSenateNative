import allMembers from '../utils/api/model-data/members';
import endpoints from '../utils/api/config/endpoints';

import { 
  FETCH_ALL_SENATE_MEMBERS,
  FETCH_ALL_HOUSE_MEMBERS,
} from '../constants/';

export const fetchMembers = () => {
  return dispatch => {
    allMembers(endpoints.members.senate).then(res => {
      dispatch({
        type: FETCH_ALL_SENATE_MEMBERS,
        payload: res,
      });
    });
  }
};