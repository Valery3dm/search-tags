import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import store from '../../store';

import { SearchPanel } from '../../components/index';
import { SearchPanelStyle } from '../../styled';
import { Component } from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchPanel component', () => {
    
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <SearchPanel />
            </BrowserRouter>
        </Provider>
    );

    
    it('should render SearchPanel component snapshot', () => {
        expect(toJson(component.find(SearchPanel))).toMatchSnapshot();
    });

    it('should render Provider', () => {
        expect(component.exists()).toBe(true);
    });

    it('should render BrowserRouter', () => {
        expect(component.find(BrowserRouter).exists()).toBe(true);
    });

    it('should render SearchPanel', () => {
        expect(component.find(SearchPanel).exists()).toBe(true);
    });

    it('should render SearchPanelStyle', () => {
        expect(component.find(SearchPanelStyle).exists()).toBe(true);
    });

    it('should render FormControl', () => {
        expect(component.find(FormControl).exists()).toBe(true);
    });

    it('should render InputGroup', () => {
        expect(component.find(InputGroup).exists()).toBe(true);
    });
    
    it('should render Link', () => {
        expect(component.find(Link).exists()).toBe(true);
    });
    
    it('should render Button', () => {
        expect(component.find(Button).exists()).toBe(true);
    });

    it('should FormControl change value', () => {
        component.find(FormControl).simulate('change', {
            target: { value: 'hello' }
        });
        expect(component.find(FormControl).props().value).toEqual('hello');
    });
});
