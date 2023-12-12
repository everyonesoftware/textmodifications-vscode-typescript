import { Pre } from "./condition";
// import { StringIterator } from "./iterator";

/**
 * Get the provided text where all letters have been converted to uppercase.
 * @param text The text to transform.
 */
export function toUppercase(text: string): string
{
    Pre.condition.assertNotUndefinedAndNotNull(text, "text");

    return text.toUpperCase();
}

/**
 * Get the provided text where all letters have been converted to lowercase.
 * @param text The text to transform.
 */
export function toLowercase(text: string): string
{
    Pre.condition.assertNotUndefinedAndNotNull(text, "text");

    return text.toLowerCase();
}

/**
 * Get the provided text where all letters have been converted to camel case. For example,
 * "hello there friend" would be returned as "helloThereFriend".
 * @param text The text to transform.
 */
export function toCamelCase(text: string): string
{
    Pre.condition.assertNotUndefinedAndNotNull(text, "text");

    // let result: string = "";

    // const iterator: StringIterator = StringIterator.create(text).start();
    // let wordStartIndex: number | undefined = undefined;
    // while (iterator.hasCurrent())
    // {
    //     const currentCharacter: string = iterator.getCurrent();
    //     if (strings)
    //     if (iterator.getCurrent().)
    // }
    return text;
}