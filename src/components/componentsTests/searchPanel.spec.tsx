import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import { SearchPanel } from '../index';



Enzyme.configure({ adapter: new Adapter() });

describe('Search-Panel component', () => {
    
    it('SearchPanel Snapshot component:', () => {
        const component = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPanel />
                </BrowserRouter>
            </Provider>
        );
        expect(toJson(component)).toMatchSnapshot();
    });
})
