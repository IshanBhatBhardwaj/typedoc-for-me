[API Reference](API%20Reference) / Queue

# Class: Queue\<T\>

Defined in: [queue.ts:3](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/queue.ts#L3)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Queue**\<`T`\>(): `Queue`\<`T`\>

#### Returns

`Queue`\<`T`\>

## Methods

### enqueue()

> **enqueue**(`item`): `void`

Defined in: [queue.ts:11](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/queue.ts#L11)

Adds an item to the end of the queue.

#### Parameters

##### item

`T`

The item to be added.

#### Returns

`void`

***

### dequeue()

> **dequeue**(): `T`

Defined in: [queue.ts:20](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/queue.ts#L20)

Removes the first item in the queue and returns it.

#### Returns

`T`

Data of type `T`

***

### front()

> **front**(): `T`

Defined in: [queue.ts:38](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/queue.ts#L38)

Returns the first item in the queue but does not remove it.

#### Returns

`T`

Data of type `T`

***

### size()

> **size**(): `number`

Defined in: [queue.ts:56](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/queue.ts#L56)

Returns the number of items in the queue.

#### Returns

`number`

The length of the queue.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [queue.ts:65](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/queue.ts#L65)

Returns true if the queue contains no items.

#### Returns

`boolean`

A boolean value indicating whether or not the queue is empty.
