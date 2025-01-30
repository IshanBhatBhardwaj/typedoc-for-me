import { AbstractHeap } from "./abstract-heap";

/**
 * A min heap: the lowest number contained in the heap will always be on top.
 */
export class MinHeap extends AbstractHeap<number> {
  /**
   * Moves the item at index i down in the heap as long as it is greater than
   * one of its children.
   *
   * @param i - The index whose value should be bubbled down through the heap.
   */
  protected heapifyDown(i: number): void {
    let min = i;
    const leftChild = this.leftChild(i);
    const rightChild = this.rightChild(i);

    if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[min]) {
      min = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[min]
    ) {
      min = rightChild;
    }

    if (min !== i) {
      this.swap(i, min);
      this.heapifyDown(min);
    }
  }

  /**
   * Moves the item at index i up in the heap as long as it is less than its
   * parent.
   *
   * @param i - The index whose value should be bubbled up through the heap.
   */
  protected heapifyUp(i: number): void {
    let parent = this.parent(i);

    while (parent >= 0 && this.heap[i] < this.heap[parent]) {
      this.swap(i, parent);
      i = parent;
      parent = this.parent(i);
    }
  }
}
