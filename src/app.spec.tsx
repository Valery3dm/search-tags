import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => shallow(<Provider store={store}><App /></Provider>)

describe('App component', () => {
    it('should render component', () => {
        const component = setUp();
        expect(component).toMatchSnapshot();
    });
});


