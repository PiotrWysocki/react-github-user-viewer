import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe("Result", () => {
    let wrapper;

    const result = {
        htmlUrl: "https://github.com/PiotrWysocki",
        avatar: "https://avatars0.githubusercontent.com/u/13002897?v=4",
        name: "Piotr Wysocki",
        location: "Warsaw"
    };

    beforeEach(() => {
        wrapper = shallow(<Result result={result} />);
    });

    it("should have href attribute with the value in the link tag", () => {
        expect(wrapper.find('a[href="https://github.com/PiotrWysocki"]').exists()).toEqual(true);
    });

    it("should have src attribute with the value in the img tag", () => {
        expect(wrapper.find('img[src="https://avatars0.githubusercontent.com/u/13002897?v=4"]').exists()).toEqual(true);
    });

    it("should have the paragraph with the name", () => {
        expect(wrapper.find('p').at(0).text()).toEqual("Piotr Wysocki");
    });

    it("should have the paragraph with the location", () => {
        expect(wrapper.find('p').at(1).text()).toEqual("Warsaw");
    });
});
