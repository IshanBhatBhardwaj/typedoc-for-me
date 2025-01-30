import { AbstractHeap } from "./abstract-heap";

/**
 * A max heap: the greatest number contained in the heap will always be on top.
 */
export class MaxHeap extends AbstractHeap<number> {
  /**
   * Moves the item at index i down in the heap as long as it is less than one
   * of its children.
   *
   * @param i - The index whose value should be bubbled down through the heap.
   */
  protected heapifyDown(i: number): void {
    let max = i;
    const leftChild = this.leftChild(i);
    const rightChild = this.rightChild(i);

    if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[max]) {
      max = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] > this.heap[max]
    ) {
      max = rightChild;
    }

    if (max !== i) {
      this.swap(i, max);
      this.heapifyDown(max);
    }
  }

  /**
   * Moves the item at index i up in the heap as long as it is greater than its
   * parent.
   *
   * @param i - The index whose value should be bubbled up through the heap.
   */
  protected heapifyUp(i: number): void {
    let parent = this.parent(i);

    while (parent >= 0 && this.heap[i] > this.heap[parent]) {
      this.swap(i, parent);
      i = parent;
      parent = this.parent(i);
    }
  }
}
