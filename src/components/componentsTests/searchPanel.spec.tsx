import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';

import { SearchPanel } from '../index';


Enzyme.configure({ adapter: new Adapter() });

describe('Search-Panel component', () => {
    
    it('SearchPanel Snapshot component:', () => {
        const component = shallow(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
        expect(toJson(component)).toMatchSnapshot();
    });
})
