import { AbstractHeap } from "./abstract-heap";

export class MinHeap extends AbstractHeap<number> {
  protected compare(a: number, b: number): number {
    return a - b;
  }
}
