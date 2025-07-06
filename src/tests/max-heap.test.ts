import { MaxHeap } from "../max-heap";

describe("MaxHeap", () => {
  it("returns the largest element when peek() is called.", () => {
    const heap = new MaxHeap();
    let largest = -Infinity;

    for (let i = 0; i < 20; i++) {
      const n = Math.random() * 2000 - 1000;
      if (n > largest) largest = n;
      heap.insert(n);
      expect(heap.peek()).toBe(largest);
    }
  });

  it("removes and returns the largest element when pop() is called.", () => {
    const heap = new MaxHeap();
    const items: number[] = [];

    for (let i = 0; i < 20; i++) {
      const n = Math.random() * 2000 - 1000;
      heap.insert(n);
      items.push(n);
    }

    const sorted = items.toSorted((a, b) => a - b);

    while (!heap.isEmpty()) {
      expect(heap.pop()).toBe(sorted.pop());
    }
  });
});
