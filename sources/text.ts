import { Pre } from "../sources/condition";

export function toUppercase(text: string): string
{
    Pre.Condition.assertNotUndefinedAndNotNull(text);

    return text.toUpperCase();
}

export function toLowercase(text: string): string
{
    Pre.Condition.assertNotUndefinedAndNotNull(text);

    return text.toLowerCase();
}

// export function toCamelCase(text: string): string
// {
//     let result: string = "";
//     let currentIndex: number = 0;
//     result.pus
//     return text;
// }