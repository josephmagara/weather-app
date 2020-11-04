import React from 'react';
import { shallow } from 'enzyme';
import { ErrorPage } from "../../../src/presentation/pages/ErrorPage"

describe('The error component', () => {
  test('should have an animation', () => {
    const wrapper = shallow(<ErrorPage/>);
    const animationView = wrapper.find("LottieView")
    expect(animationView).toExist()
  });
});