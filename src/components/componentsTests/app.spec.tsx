import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';
import { Cards, LastSearch, PreLoader, SearchPanel } from '../';

import { AppStyled } from '../../styled';

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

    it('find App', () => {
        expect(component.find(App)).toHaveLength(1);
    });

    it('find BrowserRouter', () => {
        expect(component.find(BrowserRouter)).toHaveLength(1);
    });
    
    it('find AppStyled', () => {
        expect(component.find(AppStyled)).toHaveLength(1);
    });

    it('find SearchPanel', () => {
        expect(component.find(SearchPanel)).toHaveLength(1);
    });

    it('find LastSearch', () => {
        expect(component.find(LastSearch)).toHaveLength(1);
    });

    it('find Cards', () => {
        expect(component.find(Cards)).toHaveLength(0);
    });

    it('find PreLoader', () => {
        expect(component.find(PreLoader)).toHaveLength(1);
    });
});
