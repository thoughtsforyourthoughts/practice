import { combineReducers } from 'redux';
import tripSummaryReducer from './TripSummary/tripSummaryReducer';
import { travelerReducer } from './TravelerInfo/travelerReducer';

const rootReducer = combineReducers({
  tripSummary: tripSummaryReducer,
  travelerInfo: travelerReducer,
});

export default rootReducer;
