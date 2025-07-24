[API Reference](API%20Reference) / MaxHeap

# Class: MaxHeap

Defined in: [max-heap.ts:6](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/max-heap.ts#L6)

A max heap: the greatest number contained in the heap will always be on top.

## Extends

- [`AbstractHeap`](Class.AbstractHeap)\<`number`\>

## Constructors

### Constructor

> **new MaxHeap**(): `MaxHeap`

#### Returns

`MaxHeap`

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`constructor`](Class.AbstractHeap.md#constructor)

## Properties

### heap

> `protected` **heap**: `number`[] = `[]`

Defined in: [abstract-heap.ts:6](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L6)

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`heap`](Class.AbstractHeap.md#heap)

## Methods

### insert()

> **insert**(`data`): `void`

Defined in: [abstract-heap.ts:26](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L26)

Inserts data into the heap and bubbles it up to its proper location within
the heap.

#### Parameters

##### data

`number`

The data to insert.

#### Returns

`void`

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`insert`](Class.AbstractHeap.md#insert)

***

### pop()

> **pop**(): `number`

Defined in: [abstract-heap.ts:36](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L36)

Removes the extremum of the heap and returns it.

#### Returns

`number`

data of type `T`

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`pop`](Class.AbstractHeap.md#pop)

***

### peek()

> **peek**(): `number`

Defined in: [abstract-heap.ts:56](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L56)

Returns the extremum of the heap without removing it.

#### Returns

`number`

data of type `T`

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`peek`](Class.AbstractHeap.md#peek)

***

### size()

> **size**(): `number`

Defined in: [abstract-heap.ts:69](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L69)

Returns the number of items in the heap.

#### Returns

`number`

The number of items in the heap.

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`size`](Class.AbstractHeap.md#size)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [abstract-heap.ts:78](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L78)

Returns true if the heap contains no items.

#### Returns

`boolean`

A boolean value indicating whether or not the heap is empty.

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`isEmpty`](Class.AbstractHeap.md#isempty)

***

### parent()

> `protected` **parent**(`i`): `number`

Defined in: [abstract-heap.ts:87](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L87)

Returns the index of the parent of the element at i.

#### Parameters

##### i

`number`

#### Returns

`number`

The index of the parent of the element at i.

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`parent`](Class.AbstractHeap.md#parent)

***

### leftChild()

> `protected` **leftChild**(`i`): `number`

Defined in: [abstract-heap.ts:96](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L96)

Returns the index of the left child of the element at i.

#### Parameters

##### i

`number`

#### Returns

`number`

The index of the left child of the element at i.

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`leftChild`](Class.AbstractHeap.md#leftchild)

***

### rightChild()

> `protected` **rightChild**(`i`): `number`

Defined in: [abstract-heap.ts:105](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L105)

Returns the index of the right child of the element at i.

#### Parameters

##### i

`number`

#### Returns

`number`

The index of the right child of the element at i.

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`rightChild`](Class.AbstractHeap.md#rightchild)

***

### swap()

> `protected` **swap**(`i`, `j`): `void`

Defined in: [abstract-heap.ts:115](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/abstract-heap.ts#L115)

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

#### Inherited from

[`AbstractHeap`](Class.AbstractHeap).[`swap`](Class.AbstractHeap.md#swap)

***

### heapifyDown()

> `protected` **heapifyDown**(`i`): `void`

Defined in: [max-heap.ts:13](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/max-heap.ts#L13)

Moves the item at index i down in the heap as long as it is less than one
of its children.

#### Parameters

##### i

`number`

The index whose value should be bubbled down through the heap.

#### Returns

`void`

#### Overrides

[`AbstractHeap`](Class.AbstractHeap).[`heapifyDown`](Class.AbstractHeap.md#heapifydown)

***

### heapifyUp()

> `protected` **heapifyUp**(`i`): `void`

Defined in: [max-heap.ts:41](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/3a58970b80cafad553906ac668fce179dbfc77c2/src/max-heap.ts#L41)

Moves the item at index i up in the heap as long as it is greater than its
parent.

#### Parameters

##### i

`number`

The index whose value should be bubbled up through the heap.

#### Returns

`void`

#### Overrides

[`AbstractHeap`](Class.AbstractHeap).[`heapifyUp`](Class.AbstractHeap.md#heapifyup)
