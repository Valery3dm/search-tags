import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import { Cards } from '../';

Enzyme.configure({ adapter: new Adapter() });

describe('Cards component', () => {
    const itemsList = [
        {
            id: 1,
            largeImageURL: 'qweasdzxc123',
            tags: 'item1'
        },
        {
            id: 2,
            largeImageURL: 'asdzxc123',
            tags: 'item2'
        },
        {
            id: 3,
            largeImageURL: 'zxc123',
            tags: 'item3'
        }
    ];

    it('Cards Snapshot component', () => {
        const component = shallow(
            <Cards itemsList={itemsList}/>
        );
        expect(toJson(component)).toMatchSnapshot();
    });
    
    /* it('Cards us to set props', () => {
        const component = shallow(
            <Provider store={store}>
                <Cards itemsList={[]}/>
            </Provider>
        );
        expect(component.props().itemsList).toBe([]);
    }); */
});
