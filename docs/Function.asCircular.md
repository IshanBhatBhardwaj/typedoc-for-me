[API Reference](API%20Reference) / asCircular

# Function: asCircular()

> **asCircular**\<`T`\>(`array`): `T`[]

Defined in: [as-circular.ts:18](https://github.com/IshanBhatBhardwaj/typedoc-for-me/blob/150b3e1fdcd01e8f6511088cc99c8df24577a2eb/src/as-circular.ts#L18)

Accepts an array and converts it into a circular array.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The array to make circular.

## Returns

`T`[]

A Proxy to the original array which intercepts certain getters,
setters, and methods to allow for circular and negative indexing of the array.

## Example

```
const arr = asCircular([0, 1, 2]);
console.log(arr[3]); // prints 0
console.log(arr[6]); // also prints 0
console.log(arr[-1]); // prints 2
console.log(arr[-4]); // also prints 2
console.log(arr.at(-6)); // prints 0 fdsa
```
