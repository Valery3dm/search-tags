import { combineReducers } from 'redux';
import SingleDuck from '../ducks/widgetsNG';

export const rootReducer = combineReducers({
    item: SingleDuck().reducers().reducer
});

export type RootState = ReturnType<typeof rootReducer>
