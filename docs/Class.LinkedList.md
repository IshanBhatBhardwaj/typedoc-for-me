[API Reference](API%20Reference) / LinkedList

# Class: LinkedList\<T\>

Defined in: [linked-list.ts:6](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L6)

A doubly-linked list.

## Type Parameters

### T

`T`

The type of data each node of the list will contain.

## Constructors

### Constructor

> **new LinkedList**\<`T`\>(): `LinkedList`\<`T`\>

#### Returns

`LinkedList`\<`T`\>

## Methods

### append()

> **append**(`data`): `void`

Defined in: [linked-list.ts:16](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L16)

Appends data to the end of the list.

#### Parameters

##### data

`T`

The data to be appended.

#### Returns

`void`

***

### prepend()

> **prepend**(`data`): `void`

Defined in: [linked-list.ts:35](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L35)

Prepends data to the beginning of the list.

#### Parameters

##### data

`T`

The data to be prepended.

#### Returns

`void`

***

### getFirst()

> **getFirst**(): `T`

Defined in: [linked-list.ts:54](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L54)

Retrieves the data held by the first node in the list.

#### Returns

`T`

Data of type `T`

***

### getLast()

> **getLast**(): `T`

Defined in: [linked-list.ts:67](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L67)

Retrieves the data held by the last node in the list.

#### Returns

`T`

Data of type `T`

***

### removeFirst()

> **removeFirst**(): `T`

Defined in: [linked-list.ts:80](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L80)

Removes the first node in the list and returns the data it held.

#### Returns

`T`

Data of type `T`

***

### removeLast()

> **removeLast**(): `T`

Defined in: [linked-list.ts:103](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L103)

Removes the last node in the list and returns the data it held.

#### Returns

`T`

Data of type `T`

***

### size()

> **size**(): `number`

Defined in: [linked-list.ts:126](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L126)

Returns the number of items in the list.

#### Returns

`number`

The length of the list.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [linked-list.ts:135](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L135)

Returns true if the list contains no items.

#### Returns

`boolean`

A boolean value indicating whether or not the list is empty.

***

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`T`, `void`, `unknown`\>

Defined in: [linked-list.ts:139](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/89b6f7cca3af1b30399a9c8be713e9994012bfe2/src/linked-list.ts#L139)

#### Returns

`Generator`\<`T`, `void`, `unknown`\>
