type ClassValue = string | undefined | null | false | ClassValue[];

/**
 * Combines class names into a single string, filtering out falsy values
 * @param classes - Class names to combine
 * @returns Combined class string
 * @example
 * cn('btn', isActive && 'btn-active', className)
 * // => 'btn btn-active my-class'
 */
export function cn(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter((c): c is string => typeof c === 'string' && c.length > 0)
    .join(' ');
}

/**
 * Creates a BEM-style class name generator
 * @param block - The block name
 * @returns Functions to generate element and modifier classes
 * @example
 * const bem = createBEM('button');
 * bem() // => 'button'
 * bem('icon') // => 'button__icon'
 * bem(null, 'primary') // => 'button--primary'
 * bem('icon', 'large') // => 'button__icon--large'
 */
export function createBEM(block: string) {
  return (element?: string | null, modifier?: string | null): string => {
    let className = block;

    if (element) {
      className += `__${element}`;
    }

    if (modifier) {
      className += `--${modifier}`;
    }

    return className;
  };
}
