[API Reference](API%20Reference) / AbstractHeap

# Class: `abstract` AbstractHeap\<T\>

Defined in: [abstract-heap.ts:5](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L5)

Represents a generalized heap. The exact implementations of its `heapifyUp`
and `heapifyDown` methods are left to the subclass to define.

## Extended by

- [`MaxHeap`](Class.MaxHeap)
- [`MinHeap`](Class.MinHeap)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new AbstractHeap**\<`T`\>(): `AbstractHeap`\<`T`\>

#### Returns

`AbstractHeap`\<`T`\>

## Properties

### heap

> `protected` **heap**: `T`[] = `[]`

Defined in: [abstract-heap.ts:6](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L6)

## Methods

### heapifyUp()

> `abstract` `protected` **heapifyUp**(`i`): `void`

Defined in: [abstract-heap.ts:12](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L12)

Determines whether the the item at index i should move to the top of the
heap, and if so, swaps it with its parent until it should no longer
be moved up.

#### Parameters

##### i

`number`

#### Returns

`void`

***

### heapifyDown()

> `abstract` `protected` **heapifyDown**(`i`): `void`

Defined in: [abstract-heap.ts:18](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L18)

Determines whether the the item at index i should move to the bottom of the
heap, and if so, swaps it with one of its children until it should no
longer be moved down.

#### Parameters

##### i

`number`

#### Returns

`void`

***

### insert()

> **insert**(`data`): `void`

Defined in: [abstract-heap.ts:26](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L26)

Inserts data into the heap and bubbles it up to its proper location within
the heap.

#### Parameters

##### data

`T`

The data to insert.

#### Returns

`void`

***

### pop()

> **pop**(): `T`

Defined in: [abstract-heap.ts:36](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L36)

Removes the extremum of the heap and returns it.

#### Returns

`T`

data of type `T`

***

### peek()

> **peek**(): `T`

Defined in: [abstract-heap.ts:56](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L56)

Returns the extremum of the heap without removing it.

#### Returns

`T`

data of type `T`

***

### size()

> **size**(): `number`

Defined in: [abstract-heap.ts:69](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L69)

Returns the number of items in the heap.

#### Returns

`number`

The number of items in the heap.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [abstract-heap.ts:78](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L78)

Returns true if the heap contains no items.

#### Returns

`boolean`

A boolean value indicating whether or not the heap is empty.

***

### parent()

> `protected` **parent**(`i`): `number`

Defined in: [abstract-heap.ts:87](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L87)

Returns the index of the parent of the element at i.

#### Parameters

##### i

`number`

#### Returns

`number`

The index of the parent of the element at i.

***

### leftChild()

> `protected` **leftChild**(`i`): `number`

Defined in: [abstract-heap.ts:96](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L96)

Returns the index of the left child of the element at i.

#### Parameters

##### i

`number`

#### Returns

`number`

The index of the left child of the element at i.

***

### rightChild()

> `protected` **rightChild**(`i`): `number`

Defined in: [abstract-heap.ts:105](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L105)

Returns the index of the right child of the element at i.

#### Parameters

##### i

`number`

#### Returns

`number`

The index of the right child of the element at i.

***

### swap()

> `protected` **swap**(`i`, `j`): `void`

Defined in: [abstract-heap.ts:115](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/c063c7ceb3e0db0fb0438d9b5257e44e4e78c087/src/abstract-heap.ts#L115)

Swaps the values of the elements at indices i and j.

#### Parameters

##### i

`number`

The index of the first element to swap.

##### j

`number`

The index of the second element to swap.

#### Returns

`void`
