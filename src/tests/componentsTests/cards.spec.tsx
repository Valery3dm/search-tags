import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import Card from 'react-bootstrap/Card';

import { Cards } from '../../components';

import { CardImgStyled, CardStyled, ListCards } from '../../styled';

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
    
    const component = shallow(
        <Cards itemsList={itemsList}/>
    );
    
    it('should render', () => {
        expect(component.exists()).toBe(true);
    });

    it('should render Cards component snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should find ListCards', () => {
        expect(component.find(ListCards)).toHaveLength(1);
    });

    it('should find CardStyled', () => {
        expect(component.find(CardStyled)).toHaveLength(3);
    });

    it('should find CardImgStyled', () => {
        expect(component.find(CardImgStyled)).toHaveLength(3);
    });

    it('should find Card.Body', () => {
        expect(component.find(Card.Body)).toHaveLength(3);
    });

    it('should find Card.Title', () => {
        expect(component.find(Card.Title)).toHaveLength(3);
    });
});
