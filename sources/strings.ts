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