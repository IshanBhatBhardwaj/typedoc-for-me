import { Queue } from "../queue";

describe("Queue", () => {
  it("returns items in FIFO order when dequeue is called.", () => {
    const queue = new Queue<number>();

    for (let i = 0; i < 5; i++) {
      queue.enqueue(i);
    }

    for (let i = 0; i < 5; i++) {
      expect(queue.dequeue()).toBe(i);
    }

    expect(queue.isEmpty()).toBe(true);
  });
});
