/**
 * Accepts an array and converts it into a circular array.
 *
 * @param array - The array to make circular.
 * @returns A Proxy to the original array which intercepts certain getters,
 * setters, and methods to allow for circular and negative indexing of the array.
 *
 * @example
 * ```
 * const arr = asCircular([0, 1, 2]);
 * console.log(arr[3]); // prints 0
 * console.log(arr[6]); // also prints 0
 * console.log(arr[-1]); // prints 2
 * console.log(arr[-4]); // also prints 2
 * console.log(arr.at(-6)); // prints 0
 * ```
 */
export function asCircular<T>(array: T[]): T[] {
  /**
   * Returns true if the provided key is a number or a number-like string.
   */
  const isNumericKey = (
    key: string | number | symbol
  ): key is number | `${number}` => {
    return (
      typeof key === "number" ||
      (typeof key === "string" && /^-?\d+$/.test(key))
    );
  };

  /**
   * Accepts an index that may be outside the bounds of the array and
   * applies a modulus operation such that the resulting index lies within the
   * bounds of the array.
   *
   * @param i - The index to adjust.
   * @returns - An index within the bounds of the array.
   *
   * @remarks
   * Negative indices will count backwards from the end of the array (-1 will
   * represent the last element of the array, -2 refers to the penultimate
   * element, etc.).
   */
  const toArrayIndex = (i: string | number) => {
    let index = Number(i) % array.length;
    if (index < 0) index += array.length;
    return index;
  };

  return new Proxy(array, {
    get(target, key, receiver) {
      if (isNumericKey(key)) {
        key = toArrayIndex(key).toString();
      } else if (key === "at") {
        return (idx: number) => array[toArrayIndex(idx)];
      }

      return Reflect.get(target, key, receiver);
    },
    set(target, key, newValue, receiver) {
      if (isNumericKey(key)) {
        key = toArrayIndex(key).toString();
      }

      return Reflect.set(target, key, newValue, receiver);
    },
  });
}
