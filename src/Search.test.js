import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe("Search", () => {
    let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Search search="PiotrWysocki"/>);
        });

        it("should have search value in input field", () => {
            expect(wrapper.find('input[value="PiotrWysocki"]').exists()).toEqual(true);
        });

        it("should have h3 tag with text", () => {
            expect(wrapper.find('h3').text()).toContain('React GitHub User Viewer');
        });

});

