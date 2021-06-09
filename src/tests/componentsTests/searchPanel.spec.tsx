import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import { SearchPanel } from '../../components/index';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchPanel component', () => {
    
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <SearchPanel />
            </BrowserRouter>
        </Provider>
    );

    it('should render SearchPanel component snapshot', () => {
        expect(toJson(component.find(SearchPanel))).toMatchSnapshot();
    });
    
});
