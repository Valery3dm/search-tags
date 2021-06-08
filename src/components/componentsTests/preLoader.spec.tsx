import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import { PreLoader } from '../index';
import { Rotate } from '../../styled';

Enzyme.configure({ adapter: new Adapter() });

describe('PreLoader component:', () => {

    const component = shallow(<PreLoader />);
    
    it('PreLoader Snapshot component', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('PreLoader includes Please enter TAG', () => {
        expect(component.find('div div').text()).toEqual('Please enter TAG');
    });

    it('PreLoader includes &lt; 🌸 &gt;', () => {
        expect(component.find(Rotate).render().text()).toBe('< 🌸 >');
    });

});
