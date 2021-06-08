import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import { LastSearch } from '../index';

import { LastItemSearch, LastThreeItemSearch } from '../../styled';

Enzyme.configure({ adapter: new Adapter() });

describe('Last-Search component', () => {
    const listOfThreeLastItems = ['item1','item2','item3'];
    
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <LastSearch listOfThreeLastItems={listOfThreeLastItems}/>
            </BrowserRouter>
        </Provider>
    );

    it('LastSearch Snapshot component', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('find LastSearch', () => {
        expect(component.find(LastSearch)).toHaveLength(1);
    });
    
    it('find BrowserRouter', () => {
        expect(component.find(BrowserRouter)).toHaveLength(1);
    });

    it('find LastItemSearch', () => {
        expect(component.find(LastItemSearch)).toHaveLength(1);
    });

    it('find LastThreeItemSearch', () => {
        expect(component.find(LastThreeItemSearch)).toHaveLength(1);
    });
});
