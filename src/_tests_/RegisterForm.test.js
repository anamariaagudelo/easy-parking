import React from 'react';
import RegisterForm from '../components/screens/registerPage/RegisterForm'
import { configure, shallow} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockfn = jest.fn();

describe('<RegisterForm/>', () => {
    const props = {
        handleSubmit: mockfn,
    };

    it('should be defined', () => {
        expect(<RegisterForm />).toBeDefined();
    });

    it("renders correctly", () => {
        const wrapper = shallow(
            <RegisterForm />
        );
        expect(wrapper.exists()).toBe(true);
    });

    beforeEach(() => {
        const wrapper = shallow(<RegisterForm {...props} />);
    
    it('should match the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    describe('defines user form fields', () => {
        it('renders user name field', () => {
            const userNameField = wrapper.find('[name="userName"]');

            expect(userNameField.prop('type')).toBe('text');
            expect(userNameField.prop('label')).toBe('Name *');
            expect(userNameField.prop('placeHolder')).toBe('Name');
        });
    });
    });
});