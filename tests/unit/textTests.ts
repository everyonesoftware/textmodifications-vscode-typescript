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

    suite("toCamelCase(string)", () =>
    {
        function toCamelCaseTest(value: string, expected: string): void
        {
            test(`with "${value}"`, () =>
            {
                assert.strictEqual(text.toCamelCase(value), expected);
            });
        }

        toCamelCaseTest("", "");
        toCamelCaseTest("abc", "abc");
        toCamelCaseTest("abcDef", "abcDef");
        toCamelCaseTest("abc def", "abcDef");
        toCamelCaseTest("abc def ghi", "abcDefGhi");
        toCamelCaseTest("abc DEF ghi", "abcDEFGhi");
        toCamelCaseTest("  This is a test  ", "  thisIsATest");
        toCamelCaseTest("HTTP", "http");
        toCamelCaseTest("HTTP Client", "httpClient");
        toCamelCaseTest("HTTPClient", "httpclient");
        toCamelCaseTest("httpClient", "httpClient");
        toCamelCaseTest("My HTTP Client", "myHTTPClient");
        toCamelCaseTest("myHTTPClient", "myHTTPClient");
        toCamelCaseTest("First Sentence. Second Sentence", "firstSentence. secondSentence");
        toCamelCaseTest("I Am Trying", "iAmTrying");
        toCamelCaseTest("abcDef ghiJkl", "abcDefGhiJkl");
        toCamelCaseTest("lee7 c0d3", "lee7C0d3")
        toCamelCaseTest("simple3test", "simple3test");
        toCamelCaseTest("a-kebab-case-example", "aKebabCaseExample");
        toCamelCaseTest("a_snake_case_example", "aSnakeCaseExample");
        toCamelCaseTest("APascalCaseExample", "apascalCaseExample");
        toCamelCaseTest("AnotherPascalCaseExample", "anotherPascalCaseExample");
    });
});