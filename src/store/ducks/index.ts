import { combineReducers } from 'redux';
import duck from '../ducks/widgetsNG';

export const rootReducer = combineReducers({
    item: duck.reducers.reducer
});

export type RootState = ReturnType<typeof rootReducer>
