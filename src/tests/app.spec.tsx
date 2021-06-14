import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../store';

import App from '../App';
import { Cards, LastSearch, PreLoader, SearchPanel } from '../components';

import { AppStyled } from '../styled';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {

    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter> 
        </Provider>
    );

    it('should render App component snapshot', () => {
        expect(toJson(component.find(App))).toMatchSnapshot();
    });

    it('should find App', () => {
        expect(component.find(App)).toHaveLength(1);
    });

    it('should find BrowserRouter', () => {
        expect(component.find(BrowserRouter)).toHaveLength(1);
    });
    
    it('should find AppStyled', () => {
        expect(component.find(AppStyled)).toHaveLength(1);
    });

    it('should find SearchPanel', () => {
        expect(component.find(SearchPanel)).toHaveLength(1);
    });

    it('should find LastSearch', () => {
        expect(component.find(LastSearch)).toHaveLength(1);
    });

    it('should find Cards', () => {
        expect(component.find(Cards)).toHaveLength(0);
    });

    it('should find PreLoader', () => {
        expect(component.find(PreLoader)).toHaveLength(1);
    });
});
