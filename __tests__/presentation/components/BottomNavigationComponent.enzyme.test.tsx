import React from 'react';
import { shallow } from 'enzyme';
import { BottomNavigationComponent } from '../../../src/presentation/component/navigation/BottomNavigationComponent';

describe('The bottom navigation component', () => {
  test('should have a tab for the current weather', () => {
    const wrapper = renderBottomNavigationComponent();
    const label = wrapper.find("Text").at(0).dive().text()
    expect(label).toEqual("Current Weather")
  });
});

function renderBottomNavigationComponent() {
    return shallow(
      <BottomNavigationComponent activeCellId={'current_weather'} isDayTime={true} onNavCellClicked={() => {}} />
    );
  }
  