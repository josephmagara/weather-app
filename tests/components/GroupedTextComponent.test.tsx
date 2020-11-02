import "react-native";
import { mount } from "enzyme";
import React from "react";
import {
  CellCss,
  GroupedTextComponent,
  GroupedTextComponentProtocol,
} from "../../src/presentation/component/text/GroupedTextComponent";
import { View } from "react-native";

// https://github.com/react-navigation/react-navigation/issues/2269
// React Navigation generates random React keys, which makes
// snapshot testing fail. Mock the randomness to keep from failing.
jest.mock('react-navigation/src/routers/KeyGenerator', () => ({
  generateKey: jest.fn(() => 123),
}));

describe("When rendering the group text component", function () {
  const cellCss: CellCss = {
    flexDirection: "column",
    flex: 1,
  };
  const testCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: "Top Text",
        props: {
          h1: true,
        },
        css: {
          textColor: "black",
        },
      },
      {
        text: "Bottom text",
        css: {
          textColor: "black",
        },
        props: {
          h4: true,
        },
      },
    ],
  };

  const wrapper = mount(<GroupedTextComponent {...testCellProtocol} />);

  it("should render without throwing an error", function () {
    expect(
      wrapper.findWhere((node) => node.prop("testID") === "todo-item")
    ).toContain(1);
  });
});
