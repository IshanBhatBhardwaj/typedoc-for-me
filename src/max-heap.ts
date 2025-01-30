import { AbstractHeap } from "./abstract-heap";

export class MaxHeap extends AbstractHeap<number> {
  protected compare(a: number, b: number): number {
    return b - a;
  }
}
