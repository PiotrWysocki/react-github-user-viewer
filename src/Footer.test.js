import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Footer", () => {
   let wrapper;

    const footer = {
        repos: 13,
        reposUrl: "https://github.com/PiotrWysocki?tab=repositories",
        followers: 1,
        followersUrl: "https://github.com/PiotrWysocki?tab=followers",
        following: 1,
        followingUrl: "https://github.com/PiotrWysocki?tab=following"
    };

   beforeEach(() => {
       wrapper = shallow(<Footer footer={footer}/>);
   });

    it("should have a href attribute with the value in the link to repositories", () => {
        expect(wrapper.find('a[href="https://github.com/PiotrWysocki?tab=repositories"]').exists()).toEqual(true);
    });

    it("should have a paragraph with a number of repositories", () => {
        expect(wrapper.find('a p').at(1).text()).toEqual("13");
    });

    it("should have a href attribute with the value in the link to followers", () => {
        expect(wrapper.find('a[href="https://github.com/PiotrWysocki?tab=followers"]').exists()).toEqual(true);
    });

    it("should have a paragraph with a number of followers", () => {
        expect(wrapper.find('a p').at(3).text()).toEqual("1");
    });

    it("should have a href attribute with the value in the link to following", () => {
        expect(wrapper.find('a[href="https://github.com/PiotrWysocki?tab=following"]').exists()).toEqual(true);
    });

    it("should have a paragraph with a number of following", () => {
        expect(wrapper.find('a p').at(5).text()).toEqual("1");
    });
});