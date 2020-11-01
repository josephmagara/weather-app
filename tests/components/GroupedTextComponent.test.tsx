import "react-native";
import { shallow } from "enzyme";
import React from "react";
import {
  CellCss,
  GroupedTextComponent,
  GroupedTextComponentProtocol,
} from "../../src/presentation/component/text/GroupedTextComponent";
import { View } from "react-native";

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

  const render = shallow(<GroupedTextComponent {...testCellProtocol} />);

  it("should render without throwing an error", function () {
    expect(render.is(<View />)).toBe(true);
  });
});
