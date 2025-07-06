import { MinHeap } from "../min-heap";

describe("MinHeap", () => {
  it("returns the smallest element when peek() is called.", () => {
    const heap = new MinHeap();
    let smallest = Infinity;

    for (let i = 0; i < 20; i++) {
      const n = Math.random() * 2000 - 1000;
      if (n < smallest) smallest = n;
      heap.insert(n);
      expect(heap.peek()).toBe(smallest);
    }
  });

  it("removes and returns the smallest element when pop() is called.", () => {
    const heap = new MinHeap();
    const items = [];

    for (let i = 0; i < 20; i++) {
      const n = Math.random() * 2000 - 1000;
      heap.insert(n);
      items.push(n);
    }

    // sort items in descending order
    const sorted = items.toSorted((a, b) => b - a);

    while (!heap.isEmpty()) {
      expect(heap.pop()).toBe(sorted.pop());
    }
  });
});
