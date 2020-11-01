import "react-native";
import App from "../App";
import { shallow } from 'enzyme';
import React from "react";
import AppRouter from "../src/data/routing/AppRouter";

describe('When staring thee app', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<AppRouter/>)).toBe(true);
  });
});
