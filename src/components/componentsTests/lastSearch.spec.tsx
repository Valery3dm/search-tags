import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import { LastSearch } from '../index';



Enzyme.configure({ adapter: new Adapter() });

describe('Last-Search component', () => {
    const listOfThreeLastItems = ['item1','item2','item3'];

    it('LastSearch Snapshot component', () => {
        const component = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <LastSearch listOfThreeLastItems={listOfThreeLastItems}/>
                </BrowserRouter>
            </Provider>
        );
        expect(toJson(component)).toMatchSnapshot();
    });
});
