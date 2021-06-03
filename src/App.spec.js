/* import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('React Testing', () => {
    const initialState = {output:10}
    const mockStore = configureStore()
    let store

    it("should render App component", () => {
        store = mockStore(initialState)
        const component = mount(<Provider store={store}><App /></Provider>);
        const wrapper = component.find(".app");
        expect(wrapper.length).toBe(1);
    })
}) */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });


describe("cards component", () => {

    it("should render cards component", () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    })
})
