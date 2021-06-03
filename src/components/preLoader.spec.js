import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import PreLoader from './preLoader';

Enzyme.configure({ adapter: new Adapter() });


describe("cards component", () => {

    it("should render cards component", () => {
        const component = shallow(<PreLoader />);
        expect(component).toMatchSnapshot();
    })
})