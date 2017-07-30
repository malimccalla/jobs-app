import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import jobsReducer from './jobs.reducer';
import likedJobsReducer from './likes.reducer';

export default combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
  likedJobs: likedJobsReducer
});
