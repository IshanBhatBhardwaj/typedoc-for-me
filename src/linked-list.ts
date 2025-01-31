/**
 * A doubly-linked list.
 *
 * @typeParam T - The type of data each node of the list will contain.
 */
export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private nodeCount: number = 0;

  /**
   * Appends data to the end of the list.
   *
   * @param data - The data to be appended.
   */
  append(data: T) {
    const node = new LinkedListNode(data);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
    } else {
      LinkedListNode.linkNodes(this.tail!, node);
      this.tail = node;
    }

    this.nodeCount++;
  }

  /**
   * Prepends data to the beginning of the list.
   *
   * @param data - The data to be prepended.
   */
  prepend(data: T) {
    const node = new LinkedListNode(data);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
    } else {
      LinkedListNode.linkNodes(node, this.head!);
      this.head = node;
    }

    this.nodeCount++;
  }

  /**
   * Retrieves the data held by the first node in the list.
   *
   * @returns Data of type `T`
   */
  getFirst(): T {
    if (this.isEmpty()) {
      throw new ListEmptyError(ListEmptyError.Operations.Retrieve);
    }

    return this.head!.data;
  }

  /**
   * Retrieves the data held by the last node in the list.
   *
   * @returns Data of type `T`
   */
  getLast(): T {
    if (this.isEmpty()) {
      throw new ListEmptyError(ListEmptyError.Operations.Retrieve);
    }

    return this.tail!.data;
  }

  /**
   * Removes the first node in the list and returns the data it held.
   *
   * @returns Data of type `T`
   */
  removeFirst(): T {
    if (this.isEmpty()) {
      throw new ListEmptyError(ListEmptyError.Operations.Remove);
    }

    const first = this.head!;
    this.head = first.next;
    if (!this.head) this.tail = null;
    this.nodeCount--;
    return first.data;
  }

  /**
   * Removes the last node in the list and returns the data it held.
   *
   * @returns Data of type `T`
   */
  removeLast(): T {
    if (this.isEmpty()) {
      throw new ListEmptyError(ListEmptyError.Operations.Remove);
    }

    const last = this.tail!;
    this.tail = last.prev;
    if (!this.tail) this.head = null;
    this.nodeCount--;
    return last.data;
  }

  /**
   * Returns the number of items in the list.
   *
   * @returns The length of the list.
   */
  size(): number {
    return this.nodeCount;
  }

  /**
   * Returns true if the list contains no items.
   *
   * @returns A boolean value indicating whether or not the list is empty.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.data;
      current = current.next;
    }
  }
}

/**
 * Represents individual nodes within a doubly-linked list.
 */
export class LinkedListNode<T> {
  /**
   * A convenience method for linking a node with the next node in the list.
   *
   * @param prev - The node whose `next` property will be set.
   * @param next - The node whose `prev` property will be set.
   */
  public static linkNodes<T>(prev: LinkedListNode<T>, next: LinkedListNode<T>) {
    prev.next = next;
    next.prev = prev;
  }

  public next: LinkedListNode<T> | null = null;
  public prev: LinkedListNode<T> | null = null;

  constructor(public readonly data: T) {}
}

/**
 * An error to be thrown when an attempt is made to retrieve or remove items
 * from an empty list.
 */
export class ListEmptyError extends Error {
  public static readonly Operations = {
    Retrieve: "Retrieve",
    Remove: "Remove",
  } as const;

  constructor(
    attemptedOperation: (typeof ListEmptyError)["Operations"][keyof typeof ListEmptyError.Operations]
  ) {
    super(
      `Could not ${
        attemptedOperation === ListEmptyError.Operations.Remove
          ? "remove"
          : "retrieve"
      } item from empty list.`
    );
  }
}
