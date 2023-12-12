import { Pre } from "./condition";

/**
 * Join the provided values with the provided separator in between each value.
 * @param separator The value to use to separate the individual values.
 * @param values The values to join.
 * @returns The joined {@link string}.
 */
export function join(separator: string, values: string[]): string
{
    if (separator === undefined || separator === null)
    {
        separator = "";
    }
    return values.join(separator);
}

export function escape(value: string | undefined | null, dontEscape?: string[]): string
{
    let result: string;
    if (value === undefined)
    {
        result = "undefined";
    }
    else if (value === null)
    {
        result = "null";
    }
    else
    {
        if (!dontEscape)
        {
            dontEscape = [];
        }

        result = "";
        for (const character of value)
        {
            if (dontEscape.includes(character))
            {
                result += character;
            }
            else
            {
                switch (character)
                {
                    case "\n":
                        result += "\\n";
                        break;

                    case "\r":
                        result += "\\r";
                        break;

                    case "\t":
                        result += "\\t";
                        break;

                    case "\'":
                        result += "\\\'";
                        break;

                    case "\"":
                        result += "\\\"";
                        break;

                    default:
                        result += character;
                        break;
                }
            }
        }
    }
    return result;
}

/**
 * Get a version of the provided value that is quoted with the provided quote.
 * @param value The value to quote.
 * @param quote The quotes to surround the provided value with.
 */
export function quote(value: string | undefined | null, quote?: string): string
{
    let result: string;
    if (value === undefined)
    {
        result = "undefined";
    }
    else if (value === null)
    {
        result = "null";
    }
    else
    {
        if (quote === undefined)
        {
            quote = "\"";
        }
        result = `${quote}${value}${quote}`;
    }
    return result;
}

/**
 * Get a version of the provided value where the characters are escaped and quoted.
 * @param value The value to escape and quote.
 * @param quoteString The quote to surround the value with.
 * @param dontEscape The characters to not escape.
 */
export function escapeAndQuote(value: string | undefined | null, quoteString?: string, dontEscape?: string[]): string
{
    let result: string;
    if (value === undefined)
    {
        result = "undefined";
    }
    else if (value === null)
    {
        result = "null";
    }
    else
    {
        result = escape(value, dontEscape);
        result = quote(result, quoteString);
    }
    return result;
}

/**
 * Get whether the provided value only contains whitespace characters.
 * @param value The value to check.
 */
export function isWhitespace(value: string): boolean
{
    Pre.condition.assertNotUndefinedAndNotNull(value, "value");

    let result: boolean = true;
    loop: for (let i = 0; i < value.length; i++)
    {
        switch (value[i])
        {
            case " ":
            case "\r":
            case "\n":
            case "\t":
                break;

            default:
                result = false;
                break loop;
        }
    }
    
    return result;
}

/**
 * Get whether the provided value only contains letters.
 * @param value The value to check.
 */
// export function isLetter(value: string): boolean
// {

// }

/**
 * Get whether the provided value only contains letters and numbers.
 * @param value The value to check.
 */
export function isAlphanumeric(value: string): boolean
{
    Pre.condition.assertNotUndefinedAndNotNull(value, "value");

    let result: boolean;
    if (value.length === 0)
    {
        result = false;
    }
    else
    {
        result = true;
        for (let i = 0; i < value.length; i++)
        {
            const currentCharacter: string = value[i];
            if (("a" <= currentCharacter && currentCharacter <= "z") ||
                ("A" <= currentCharacter && currentCharacter <= "Z") ||
                ("0" <= currentCharacter && currentCharacter <= "9"))
            {
                
            }
        }
    }
    
    return result;
}