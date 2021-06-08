import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import Card from 'react-bootstrap/Card';

import { Cards } from '../';

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

    it('Cards Snapshot component', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('find ListCards', () => {
        expect(component.find(ListCards)).toHaveLength(1);
    });

    it('find CardStyled', () => {
        expect(component.find(CardStyled)).toHaveLength(3);
    });

    it('find CardImgStyled', () => {
        expect(component.find(CardImgStyled)).toHaveLength(3);
    });

    it('find Card.Body', () => {
        expect(component.find(Card.Body)).toHaveLength(3);
    });

    it('find Card.Title', () => {
        expect(component.find(Card.Title)).toHaveLength(3);
    });
});
