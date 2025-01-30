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
        throw new QueueEmptyError(QueueEmptyError.Operations.Dequeue);
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
        throw new QueueEmptyError(QueueEmptyError.Operations.Front);
      }

      throw e;
    }
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
 * An error to be throw when an attempt is made to retrieve or remove items from
 * an empty queue.
 */
export class QueueEmptyError extends Error {
  public static readonly Operations = {
    Dequeue: "Dequeue",
    Front: "Front",
  } as const;

  constructor(
    attemptedOperation: (typeof QueueEmptyError)["Operations"][keyof typeof QueueEmptyError.Operations]
  ) {
    let message: string;

    switch (attemptedOperation) {
      case QueueEmptyError.Operations.Dequeue:
        message = "Could not dequeue item from empty queue.";
        break;
      case QueueEmptyError.Operations.Front:
        message = "Could not call front() on empty queue.";
        break;
    }

    super(message);
  }
}
