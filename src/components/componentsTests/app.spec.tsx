import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';

import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {

    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter> 
        </Provider>
    );

    it('App snapshots component', () => {
        expect(toJson(component.find(App))).toMatchSnapshot();
    });

});