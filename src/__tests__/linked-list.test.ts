import { LinkedList } from "../linked-list";

describe("LinkedList", () => {
  it("appends items to the end of the list when append() is called.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.append(i);
      expect(list.getLast()).toBe(i);
      expect(list.getFirst()).toBe(0);
    }
  });

  it("prepends items to the beginning of the list when prepend() is called.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.prepend(i);
      expect(list.getFirst()).toBe(i);
      expect(list.getLast()).toBe(0);
    }
  });

  it("increases its size when append() is called.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.append(i);
    }

    expect(list.size()).toBe(5);
  });

  it("increases its size when prepend() is called.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.prepend(i);
    }

    expect(list.size()).toBe(5);
  });

  it("removes and returns the first item in the list when removeFirst() is called.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.append(i);
    }

    for (let i = 0; i < 5; i++) {
      const item = list.removeFirst();
      expect(item).toBe(i);
    }

    expect(list.isEmpty()).toBe(true);
  });

  it("removes and returns the last item in the list when removeLast() is called.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.append(i);
    }

    for (let i = 4; i >= 0; i--) {
      const item = list.removeLast();
      expect(item).toBe(i);
    }

    expect(list.isEmpty()).toBe(true);
  });

  it("is iterable.", () => {
    const list = new LinkedList<number>();

    for (let i = 0; i < 5; i++) {
      list.append(i);
    }

    let i = 0;

    for (const num of list) {
      expect(num).toBe(i++);
    }
  });
});
