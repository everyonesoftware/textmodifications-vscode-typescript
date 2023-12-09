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



// /**
//  * A type that can be used to iterate over a collection.
//  */
// abstract class Iterator<T>
// {
//     /**
//      * Move to the next value in the collection. Return whether this {@link Iterator} points to a
//      * value after the move.
//      */
//     public abstract next(): boolean;

//     /**
//      * Get whether this {@link Iterator} has started iterating over the values in the collection.
//      */
//     public abstract hasStarted(): boolean;

//     /**
//      * Get whether this {@link Iterator} currently points at a value in the collection.
//      */
//     public abstract hasCurrent(): boolean;

//     /**
//      * Get the value that this {@link Iterator} points to.
//      */
//     public abstract getCurrent(): T;
// }

// /**
//  * An {@link Iterator} that maintains the current index of the value being pointed at in the
//  * collection.
//  */
// abstract class IndexableIterator<T> extends Iterator<T>
// {
//     /**
//      * Get the current index of the value this {@link Iterator} points to.
//      */
//     public abstract getCurrentIndex(): number;
// }

// /**
//  * An {@link Iterator} that iterates over the characters in a {@link string}.
//  */
// class StringIterator extends IndexableIterator<string>
// {
//     private readonly value: string;
//     private currentIndex: number;
//     private started: boolean;

//     public constructor(value: string)
//     {
//         super();

//         this.value = value;
//         this.currentIndex = 0;
//         this.started = false;
//     }

//     public static create(value: string): StringIterator
//     {
//         return new StringIterator(value);
//     }

//     public override getCurrentIndex(): number {
        
//         throw new Error("Method not implemented.");
//     }
//     public override next(): boolean {
//         throw new Error("Method not implemented.");
//     }
//     public override hasStarted(): boolean {
//         throw new Error("Method not implemented.");
//     }
//     public override hasCurrent(): boolean {
//         throw new Error("Method not implemented.");
//     }
//     public override getCurrent(): string {
//         throw new Error("Method not implemented.");
//     }

// }

// export function toCamelCase(text: string): string
// {
//     let result: string = "";
//     let currentIndex: number = 0;
//     result.pus
//     return text;
// }