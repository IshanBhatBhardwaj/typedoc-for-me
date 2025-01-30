import { LinkedList, ListEmptyError } from "./linked-list";

export class Queue<T> {
  private queue = new LinkedList<T>();

  /**
   * Adds an item to the end of the queue.
   *
   * @param item - The item to be added.
   */
  public enqueue(item: T) {
    this.queue.append(item);
  }

  /**
   * Removes the first item in the queue and returns it.
   *
   * @returns Data of type `T`
   */
  public dequeue(): T {
    try {
      const data = this.queue.removeFirst();
      return data;
    } catch (e) {
      if (e instanceof ListEmptyError) {
        throw new QueueEmptyError("Could not dequeue item from empty queue.");
      }

      throw e;
    }
  }

  /**
   * Returns the first item in the queue but does not remove it.
   *
   * @returns Data of type `T`
   */
  public front(): T {
    try {
      const data = this.queue.getFirst();
      return data;
    } catch (e) {
      if (e instanceof ListEmptyError) {
        throw new QueueEmptyError("Could not call front() on empty queue.");
      }

      throw e;
    }
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns The length of the queue.
   */
  public size(): number {
    return this.queue.size();
  }

  /**
   * Returns true if the queue contains no items.
   *
   * @returns A boolean value indicating whether or not the queue is empty.
   */
  public isEmpty(): boolean {
    return this.queue.isEmpty();
  }
}

/**
 * An error to be thrown when an attempt is made to retrieve or remove items
 * from an empty queue.
 */
export class QueueEmptyError extends Error {
  constructor(message: string) {
    super(message);
  }
}
