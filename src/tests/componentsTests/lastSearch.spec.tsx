import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import { LastSearch } from '../../components/index';

import { LastItemSearch, LastThreeItemSearch } from '../../styled';

Enzyme.configure({ adapter: new Adapter() });

describe('LastSearch component', () => {
    const listOfThreeLastItems = ['item1','item2','item3'];
    
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <LastSearch listOfThreeLastItems={listOfThreeLastItems}/>
            </BrowserRouter>
        </Provider>
    );

    it('should render LastSearch component snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });
    
    it('should find LastSearch', () => {
        expect(component.find(LastSearch)).toHaveLength(1);
    });
    
    it('should find BrowserRouter', () => {
        expect(component.find(BrowserRouter)).toHaveLength(1);
    });

    it('should find LastItemSearch', () => {
        expect(component.find(LastItemSearch)).toHaveLength(1);
    });

    it('should find LastThreeItemSearch', () => {
        expect(component.find(LastThreeItemSearch)).toHaveLength(1);
    });
});
