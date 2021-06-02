import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import duck from '../store/ducks/widgetsNG';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(duck.actionCreators , dispatch);
}
