import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';

import { SearchPanel, PreLoader, LastSearch, Cards } from './index';
import store from '../store';


Enzyme.configure({ adapter: new Adapter() });


describe('components component', () => {
    const listOfThreeLastItems = ['item1','item2','item3'];
    const itemList = [
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

    it('SearchPanel Snapshot component', () => {
        const component = shallow(<Provider store={store}><SearchPanel /></Provider>);
        expect(component).toMatchSnapshot();
    });
    it('PreLoader Snapshot component', () => {
        const component = shallow(<PreLoader />);
        expect(component).toMatchSnapshot();
    });
    it('LastSearch Snapshot component', () => {
        const component = shallow(<Provider store={store}><LastSearch listOfThreeLastItems={listOfThreeLastItems}/></Provider>);
        expect(component).toMatchSnapshot();
    });
    it('Cards Snapshot component', () => {
        const component = shallow(<Provider store={store}><Cards itemList={itemList}/></Provider>);
        expect(component).toMatchSnapshot();
    });
});

