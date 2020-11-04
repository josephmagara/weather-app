import React from "react";
import { shallow } from "enzyme";
import { SelectLocationPage } from "../../../src/presentation/pages/SelectLocationPage";

describe("The select location pagee", () => {
  test("should have a list", () => {
    const selectLocationPage = renderSelectLocationPage()
    const locationsList = selectLocationPage.find("FlatList");
    expect(locationsList).toExist();
  });
});

function renderSelectLocationPage() {
  return shallow(
    <SelectLocationPage isDayTime={true} onCitySelected={() => {}} />
  );
}
