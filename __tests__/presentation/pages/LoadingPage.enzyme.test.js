import React from 'react';
import { shallow } from 'enzyme';
import { LoadingPage } from "../../../src/presentation/pages/LoadingPage"

describe('The loading component', () => {
  test('should have a helpful loading message', () => {
    const wrapper = shallow(<LoadingPage/>);
    const label = wrapper.find("Text").at(0).dive().text()
    expect(label).toEqual("Retrieving weather report...")
  });
});