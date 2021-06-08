import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import { PreLoader } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('PreLoader component:', () => {
    
    it('PreLoader Snapshot component', () => {
        const component = shallow(<PreLoader />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('PreLoader TAG', () => {
        const component = shallow(<PreLoader />);
        expect(component.find('div div').text()).toEqual('Please enter TAG');
    });
});
