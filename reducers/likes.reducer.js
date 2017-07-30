import _ from 'lodash';
import {
  LIKE_JOB
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey')
    default:
      return state;
  }
};
