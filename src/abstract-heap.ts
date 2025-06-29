/**
 * Represents a generalized heap. The exact implementations of its `heapifyUp`
 * and `heapifyDown` methods are left to the subclass to define.
 */
export abstract class AbstractHeap<T> {
  protected heap: T[] = [];
  /**
   * Determines whether the the item at index i should move to the top of the
   * heap, and if so, swaps it with its parent until it should no longer
   * be moved up.
   */
  protected abstract heapifyUp(i: number): void;
  /**
   * Determines whether the the item at index i should move to the bottom of the
   * heap, and if so, swaps it with one of its children until it should no
   * longer be moved down.
   */
  protected abstract heapifyDown(i: number): void;

  /**
   * Inserts data into the heap and bubbles it up to its proper location within
   * the heap.
   *
   * @param data - The data to insert.
   */
  public insert(data: T) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length - 1);
  }

  /**
   * Removes the extremum of the heap and returns it.
   *
   * @returns data of type `T`
   */
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

  /**
   * Returns the extremum of the heap without removing it.
   *
   * @returns data of type `T`
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new HeapEmptyError("Could not access item of empty heap.");
    }

    return this.heap[0];
  }

  /**
   * Returns the number of items in the heap.
   *
   * @returns The number of items in the heap.
   */
  public size(): number {
    return this.heap.length;
  }

  /**
   * Returns true if the heap contains no items.
   *
   * @returns A boolean value indicating whether or not the heap is empty.
   */
  public isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the index of the parent of the element at i.
   *
   * @returns The index of the parent of the element at i.
   */
  protected parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  /**
   * Returns the index of the left child of the element at i.
   *
   * @returns The index of the left child of the element at i.
   */
  protected leftChild(i: number): number {
    return i * 2 + 1;
  }

  /**
   * Returns the index of the right child of the element at i.
   *
   * @returns The index of the right child of the element at i.
   */
  protected rightChild(i: number): number {
    return i * 2 + 2;
  }

  /**
   * Swaps the values of the elements at indices i and j.
   *
   * @param i - The index of the first element to swap.
   * @param j - The index of the second element to swap.
   */
  protected swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

/**
 * An error to be thrown when an attempt is made to retrieve or remove items
 * from an empty heap.
 */
export class HeapEmptyError extends Error {
  constructor(message: string) {
    super(message);
  }
}
