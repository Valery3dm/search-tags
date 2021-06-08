import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import SingleDuck from '../store/ducks/widgetsNG';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(SingleDuck().actionCreators(), dispatch);
};
