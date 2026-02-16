import type { MutableRefObject, RefCallback, Ref } from 'react';

type PossibleRef<T> = Ref<T> | undefined;

/**
 * Merges multiple refs into a single ref callback
 * @param refs - Refs to merge
 * @returns A ref callback that updates all refs
 * @example
 * const Component = forwardRef((props, ref) => {
 *   const internalRef = useRef(null);
 *   return <div ref={mergeRefs(ref, internalRef)} />;
 * });
 */
export function mergeRefs<T>(...refs: PossibleRef<T>[]): RefCallback<T> {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}

/**
 * Sets a ref value
 * @param ref - The ref to set
 * @param value - The value to set
 */
export function setRef<T>(ref: PossibleRef<T>, value: T | null): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref != null) {
    (ref as MutableRefObject<T | null>).current = value;
  }
}
