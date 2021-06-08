import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';

import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {

    const props = {
        itemsList: [],
        listOfThreeLastItems: [],
        inputItem: '',
        isLoaded: false
    };

    it('App snapshots component', () => {
        const component = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        console.log(component.debug())
        expect(toJson(component)).toMatchSnapshot();
    });

    /* it('PreLoader view', () => {
        const nextProps  = {
            ...props, isLoaded: true
        };
        const component = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(component.find('app-styled div')).toBe('heelo');
    }); */
});