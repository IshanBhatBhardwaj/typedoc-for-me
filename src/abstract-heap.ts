export abstract class AbstractHeap<T> {
  protected heap: T[] = [];
  /**
   * A method that should return a negative number if item a has higher priority
   * than b, a positive number if b has higher priority than a, and 0 if the
   * same.
   */
  protected abstract compare(a: T, b: T): number;

  public insert(data: T) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length);
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new HeapEmptyError("Could not pop item from empty heap.");
    }

    this.swap(0, this.heap.length - 1);
    const extremum = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heapifyDown(0);
    }

    return extremum;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new HeapEmptyError("Could not access item from empty heap.");
    }

    return this.heap[0];
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  protected heapifyDown(i: number): void {
    let extremum = i;
    const leftChild = this.leftChild(i);
    const rightChild = this.rightChild(i);

    if (
      leftChild < this.heap.length &&
      this.compare(this.heap[leftChild], this.heap[extremum]) < 0
    ) {
      extremum = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.compare(this.heap[rightChild], this.heap[extremum]) < 0
    ) {
      extremum = rightChild;
    }

    if (extremum !== i) {
      this.swap(i, extremum);
      this.heapifyDown(extremum);
    }
  }

  protected heapifyUp(i: number): void {
    let parent = this.parent(i);

    while (parent >= 0 && this.compare(this.heap[i], this.heap[parent]) < 0) {
      this.swap(i, parent);
      i = parent;
      parent = this.parent(i);
    }
  }

  protected parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  protected leftChild(i: number): number {
    return i * 2 + 1;
  }

  protected rightChild(i: number): number {
    return i * 2 + 2;
  }

  protected swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

export class HeapEmptyError extends Error {
  constructor(message: string) {
    super(message);
  }
}
