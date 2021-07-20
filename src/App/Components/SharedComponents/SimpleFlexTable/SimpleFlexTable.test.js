import React from "react";
import { shallow } from "enzyme";
import SimpleFlexTable from "./SimpleFlexTable.component";
import { FlexTable, FlexRow } from "./SimpleFlexTable.styles";
import { firstConfigToTest, secondConfigToTest } from "./SimpleFlexTable.data";

describe("SimpleFlexTable", () => {
  it("Check SimpleFlexTable structure", () => {
    const wrapper = shallow(<SimpleFlexTable config={firstConfigToTest} />);

    expect(wrapper.find(FlexTable).length).toBe(1);
    expect(wrapper.find(FlexRow).length).toBe(3);
  });
  it("Should render three rows", () => {
    const wrapper = shallow(<SimpleFlexTable config={firstConfigToTest} />);

    expect(wrapper.find(FlexRow).length).toBe(3);
  });
  it("Should render five rows", () => {
    const wrapper = shallow(<SimpleFlexTable config={secondConfigToTest} />);

    expect(wrapper.find(FlexRow).length).toBe(5);
  });
});
