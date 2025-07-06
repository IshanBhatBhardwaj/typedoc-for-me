import { asCircular } from "../as-circular";

describe("asCircular", () => {
  it("returns an array.", () => {
    expect(Array.isArray(asCircular([]))).toBe(true);
  });

  it("allows for circular indexing of the array.", () => {
    const arr = asCircular([0, 1, 2, 3, 4, 5, 6]);

    let i, j;
    i = j = 0;

    for (; i < arr.length * 3; i++) {
      expect(arr[i]).toBe(arr[j]);
      j++;
      if (j === arr.length) j = 0;
    }
  });

  it("allows for negative indexing of the array.", () => {
    const arr = asCircular([0, 1, 2, 3, 4, 5, 6]);
    let j = arr.length - 1;
    for (let i = -1; i >= -arr.length * 3; i--) {
      expect(arr[i]).toBe(arr[j]);
      j--;
      if (j < 0) j = arr.length - 1;
    }
  });

  it("allows for circular retrieval with the at method of the array.", () => {
    const arr = asCircular([0, 1, 2, 3, 4, 5, 6]);

    let i, j;
    i = j = 0;

    for (; i < arr.length * 3; i++) {
      expect(arr.at(i)).toBe(arr.at(j));
      j++;
      if (j === arr.length) j = 0;
    }
  });

  it("allows for circular retrieval of negative indices with the at method.", () => {
    const arr = asCircular([0, 1, 2, 3, 4, 5, 6]);
    let i, j;
    i = j = -1;

    for (; i >= -arr.length * 3; i--) {
      expect(arr.at(i)).toBe(arr.at(j));
      j--;
      if (j < -arr.length) j = -1;
    }
  });
});
