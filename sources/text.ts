import { Pre } from "./condition";
import { StringIterator } from "./iterator";
import { isLetterOrDigit, isLowercasedLetter, isWhitespace } from "./strings";

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

    let result: string = "";

    const iterator: StringIterator = StringIterator.create(text).start();
    let insideWordSequence: boolean = false;
    let capitalize: boolean | undefined = false;
    while (iterator.hasCurrent())
    {
        const current: string = iterator.takeCurrent();
        if (isLetterOrDigit(current))
        {
            if (capitalize === undefined)
            {
                result += current;
            }
            else if (capitalize === false)
            {
                result += toLowercase(current);
                if (isLowercasedLetter(current))
                {
                    capitalize = undefined;
                }
            }
            else
            {
                result += toUppercase(current);
                capitalize = undefined;
            }

            insideWordSequence = true;
        }
        else if (isWhitespace(current) || current === "-" || current === "_")
        {
            if (insideWordSequence)
            {
                capitalize = true;
            }
            else
            {
                result += current;
            }
        }
        else
        {
            insideWordSequence = false;
            capitalize = false;
            result += current;
        }
    }
    return result;
}

export function toPascalCase(text: string): string
{
    Pre.condition.assertNotUndefinedAndNotNull(text, "text");

    let result: string = "";

    const iterator: StringIterator = StringIterator.create(text).start();
    let insideWordSequence: boolean = false;
    let capitalize: boolean | undefined = true;
    while (iterator.hasCurrent())
    {
        const current: string = iterator.takeCurrent();
        if (isLetterOrDigit(current))
        {
            if (capitalize === undefined)
            {
                result += current;
            }
            else
            {
                result += toUppercase(current);
                capitalize = undefined;
            }

            insideWordSequence = true;
        }
        else if (isWhitespace(current) || current === "-" || current === "_")
        {
            if (insideWordSequence)
            {
                capitalize = true;
            }
            else
            {
                result += current;
            }
        }
        else
        {
            insideWordSequence = false;
            capitalize = true;
            result += current;
        }
    }
    return result;
}