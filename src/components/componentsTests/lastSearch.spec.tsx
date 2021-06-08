import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';

import { LastSearch } from '../index';


Enzyme.configure({ adapter: new Adapter() });

describe('Last-Search component', () => {
    const listOfThreeLastItems = ['item1','item2','item3'];

    it('LastSearch Snapshot component', () => {
        const component = shallow(
            <Provider store={store}>
                <LastSearch listOfThreeLastItems={listOfThreeLastItems}/>
            </Provider>
        );
        expect(toJson(component)).toMatchSnapshot();
    });
});
