import * as assert from "assert"

import * as text from "../../sources/text"

suite("text.ts", () =>
{
    suite("toLowercase(string)", () =>
    {
        function toLowercaseTest(value: string, expected: string): void
        {
            test(`with "${value}"`, () =>
            {
                assert.strictEqual(text.toLowercase(value), expected);
            });
        }

        toLowercaseTest("", "");
        toLowercaseTest("a", "a");
        toLowercaseTest("B", "b");
    });

    suite("toUppercase(string)", () =>
    {
        function toUppercaseTest(value: string, expected: string): void
        {
            test(`with "${value}"`, () =>
            {
                assert.strictEqual(text.toUppercase(value), expected);
            });
        }

        toUppercaseTest("", "");
        toUppercaseTest("a", "A");
        toUppercaseTest("B", "B");
    });

    // suite("toCamelCase(string)", () =>
    // {
    //     function toCamelCaseTest(value: string, expected: string): void
    //     {
    //         test(`with "${value}"`, () =>
    //         {
    //             assert.strictEqual(expected, text.toCamelCase(value));
    //         });
    //     }

    //     toCamelCaseTest("", "");
    //     toCamelCaseTest("abc", "abc");
    //     toCamelCaseTest("abcDef", "abcDef");
    //     toCamelCaseTest("abc def", "abcDef");
    //     toCamelCaseTest("abc def ghi", "abcDefGhi");
    //     toCamelCaseTest("abc DEF ghi", "abcDEFGhi");
    // });
});