import { Pre } from "./condition";
// import { StringIterator } from "./iterator";

export function toUppercase(text: string): string
{
    Pre.Condition.assertNotUndefinedAndNotNull(text, "text");

    return text.toUpperCase();
}

export function toLowercase(text: string): string
{
    Pre.Condition.assertNotUndefinedAndNotNull(text, "text");

    return text.toLowerCase();
}

export function toCamelCase(text: string): string
{
    Pre.Condition.assertNotUndefinedAndNotNull(text, "text");

    // let result: string = "";

    // const iterator: StringIterator = StringIterator.create(text).start();
    // let wordStartIndex: number | undefined = undefined;
    // while (iterator.hasCurrent())
    // {
    //     if (iterator.getCurrent().)
    // }
    return text;
}