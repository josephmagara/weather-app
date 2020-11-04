import { getItemKey } from "../../../src/data/utils/CommonUtils";

describe("Common Utils", () => {
  test("generate a key/string", async () => {
    const firstKey = getItemKey();
    expect(firstKey).toBeDefined();
  });

  test("generate a unique key/string", async () => {
    const firstKey = getItemKey();
    const second = getItemKey();
    const stringsAreUnique = firstKey !== second
    expect(stringsAreUnique).toBe(true);
  });


});
