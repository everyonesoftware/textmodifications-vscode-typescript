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
        toCamelCaseTest("  This is a test  ", "  thisIsATest  ");
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
        toCamelCaseTest("a b  .  c d", "aB  .  cD");
    });

    suite("toPascalCase(string)", () =>
    {
        function toPascalCaseTest(value: string, expected: string): void
        {
            test(`with "${value}"`, () =>
            {
                assert.strictEqual(text.toPascalCase(value), expected);
            });
        }

        toPascalCaseTest("", "");
        toPascalCaseTest("abc", "Abc");
        toPascalCaseTest("abcDef", "AbcDef");
        toPascalCaseTest("abc def", "AbcDef");
        toPascalCaseTest("abc def ghi", "AbcDefGhi");
        toPascalCaseTest("abc DEF ghi", "AbcDEFGhi");
        toPascalCaseTest("  This is a test  ", "  ThisIsATest  ");
        toPascalCaseTest("HTTP", "HTTP");
        toPascalCaseTest("HTTP Client", "HTTPClient");
        toPascalCaseTest("HTTPClient", "HTTPClient");
        toPascalCaseTest("httpClient", "HttpClient");
        toPascalCaseTest("My HTTP Client", "MyHTTPClient");
        toPascalCaseTest("myHTTPClient", "MyHTTPClient");
        toPascalCaseTest("First Sentence. Second Sentence", "FirstSentence. SecondSentence");
        toPascalCaseTest("I Am Trying", "IAmTrying");
        toPascalCaseTest("abcDef ghiJkl", "AbcDefGhiJkl");
        toPascalCaseTest("lee7 c0d3", "Lee7C0d3")
        toPascalCaseTest("simple3test", "Simple3test");
        toPascalCaseTest("a-kebab-case-example", "AKebabCaseExample");
        toPascalCaseTest("a_snake_case_example", "ASnakeCaseExample");
        toPascalCaseTest("APascalCaseExample", "APascalCaseExample");
        toPascalCaseTest("AnotherPascalCaseExample", "AnotherPascalCaseExample");
        toPascalCaseTest("a b  .  c d", "AB  .  CD");
    });
});

suite("toSnakeCase(string)", () =>
{
    function toSnakeCaseTest(value: string, expected: string): void
    {
        test(`with "${value}"`, () =>
        {
            assert.strictEqual(text.toSnakeCase(value), expected);
        });
    }

    toSnakeCaseTest("", "");
    toSnakeCaseTest("abc", "abc");
    toSnakeCaseTest("abcDef", "abcdef");
    toSnakeCaseTest("abc def", "abc_def");
    toSnakeCaseTest("abc def ghi", "abc_def_ghi");
    toSnakeCaseTest("abc DEF ghi", "abc_def_ghi");
    toSnakeCaseTest("  This is a test  ", "  this_is_a_test  ");
    toSnakeCaseTest("  This   is  another   test  ", "  this_is_another_test  ");
    toSnakeCaseTest("HTTP", "http");
    toSnakeCaseTest("HTTP Client", "http_client");
    toSnakeCaseTest("HTTPClient", "httpclient");
    toSnakeCaseTest("httpClient", "httpclient");
    toSnakeCaseTest("My HTTP Client", "my_http_client");
    toSnakeCaseTest("myHTTPClient", "myhttpclient");
    toSnakeCaseTest("First Sentence. Second Sentence", "first_sentence. second_sentence");
    toSnakeCaseTest("a b . . . c d", "a_b . . . c_d");
    toSnakeCaseTest("I Am Trying", "i_am_trying");
    toSnakeCaseTest("abcDef ghiJkl", "abcdef_ghijkl");
    toSnakeCaseTest("lee7 c0d3", "lee7_c0d3")
    toSnakeCaseTest("simple3test", "simple3test");
    toSnakeCaseTest("a-kebab-case-example", "a_kebab_case_example");
    toSnakeCaseTest("a_snake_case_example", "a_snake_case_example");
    toSnakeCaseTest("APascalCaseExample", "apascalcaseexample");
    toSnakeCaseTest("AnotherPascalCaseExample", "anotherpascalcaseexample");
});

suite("toUpperSnakeCase(string)", () =>
{
    function toUpperSnakeCaseTest(value: string, expected: string): void
    {
        test(`with "${value}"`, () =>
        {
            assert.strictEqual(text.toUpperSnakeCase(value), expected);
        });
    }

    toUpperSnakeCaseTest("", "");
    toUpperSnakeCaseTest("abc", "ABC");
    toUpperSnakeCaseTest("abcDef", "ABCDEF");
    toUpperSnakeCaseTest("abc def", "ABC_DEF");
    toUpperSnakeCaseTest("abc def ghi", "ABC_DEF_GHI");
    toUpperSnakeCaseTest("abc DEF ghi", "ABC_DEF_GHI");
    toUpperSnakeCaseTest("  This is a test  ", "  THIS_IS_A_TEST  ");
    toUpperSnakeCaseTest("  This   is  another   test  ", "  THIS_IS_ANOTHER_TEST  ");
    toUpperSnakeCaseTest("HTTP", "HTTP");
    toUpperSnakeCaseTest("HTTP Client", "HTTP_CLIENT");
    toUpperSnakeCaseTest("HTTPClient", "HTTPCLIENT");
    toUpperSnakeCaseTest("httpClient", "HTTPCLIENT");
    toUpperSnakeCaseTest("My HTTP Client", "MY_HTTP_CLIENT");
    toUpperSnakeCaseTest("myHTTPClient", "MYHTTPCLIENT");
    toUpperSnakeCaseTest("First Sentence. Second Sentence", "FIRST_SENTENCE. SECOND_SENTENCE");
    toUpperSnakeCaseTest("a b . . . c d", "A_B . . . C_D");
    toUpperSnakeCaseTest("I Am Trying", "I_AM_TRYING");
    toUpperSnakeCaseTest("abcDef ghiJkl", "ABCDEF_GHIJKL");
    toUpperSnakeCaseTest("lee7 c0d3", "LEE7_C0D3")
    toUpperSnakeCaseTest("simple3test", "SIMPLE3TEST");
    toUpperSnakeCaseTest("a-kebab-case-example", "A_KEBAB_CASE_EXAMPLE");
    toUpperSnakeCaseTest("a_snake_case_example", "A_SNAKE_CASE_EXAMPLE");
    toUpperSnakeCaseTest("APascalCaseExample", "APASCALCASEEXAMPLE");
    toUpperSnakeCaseTest("AnotherPascalCaseExample", "ANOTHERPASCALCASEEXAMPLE");
});



suite("toKebabCase(string)", () =>
{
    function toKebabCaseTest(value: string, expected: string): void
    {
        test(`with "${value}"`, () =>
        {
            assert.strictEqual(text.toKebabCase(value), expected);
        });
    }

    toKebabCaseTest("", "");
    toKebabCaseTest("abc", "abc");
    toKebabCaseTest("abcDef", "abcdef");
    toKebabCaseTest("abc def", "abc-def");
    toKebabCaseTest("abc def ghi", "abc-def-ghi");
    toKebabCaseTest("abc DEF ghi", "abc-def-ghi");
    toKebabCaseTest("  This is a test  ", "  this-is-a-test  ");
    toKebabCaseTest("  This   is  another   test  ", "  this-is-another-test  ");
    toKebabCaseTest("HTTP", "http");
    toKebabCaseTest("HTTP Client", "http-client");
    toKebabCaseTest("HTTPClient", "httpclient");
    toKebabCaseTest("httpClient", "httpclient");
    toKebabCaseTest("My HTTP Client", "my-http-client");
    toKebabCaseTest("myHTTPClient", "myhttpclient");
    toKebabCaseTest("First Sentence. Second Sentence", "first-sentence. second-sentence");
    toKebabCaseTest("a b . . . c d", "a-b . . . c-d");
    toKebabCaseTest("I Am Trying", "i-am-trying");
    toKebabCaseTest("abcDef ghiJkl", "abcdef-ghijkl");
    toKebabCaseTest("lee7 c0d3", "lee7-c0d3")
    toKebabCaseTest("simple3test", "simple3test");
    toKebabCaseTest("a-kebab-case-example", "a-kebab-case-example");
    toKebabCaseTest("a_snake_case_example", "a-snake-case-example");
    toKebabCaseTest("APascalCaseExample", "apascalcaseexample");
    toKebabCaseTest("AnotherPascalCaseExample", "anotherpascalcaseexample");
});

suite("toUpperSnakeCase(string)", () =>
{
    function toUpperKebabCaseTest(value: string, expected: string): void
    {
        test(`with "${value}"`, () =>
        {
            assert.strictEqual(text.toUpperKebabCase(value), expected);
        });
    }

    toUpperKebabCaseTest("", "");
    toUpperKebabCaseTest("abc", "ABC");
    toUpperKebabCaseTest("abcDef", "ABCDEF");
    toUpperKebabCaseTest("abc def", "ABC-DEF");
    toUpperKebabCaseTest("abc def ghi", "ABC-DEF-GHI");
    toUpperKebabCaseTest("abc DEF ghi", "ABC-DEF-GHI");
    toUpperKebabCaseTest("  This is a test  ", "  THIS-IS-A-TEST  ");
    toUpperKebabCaseTest("  This   is  another   test  ", "  THIS-IS-ANOTHER-TEST  ");
    toUpperKebabCaseTest("HTTP", "HTTP");
    toUpperKebabCaseTest("HTTP Client", "HTTP-CLIENT");
    toUpperKebabCaseTest("HTTPClient", "HTTPCLIENT");
    toUpperKebabCaseTest("httpClient", "HTTPCLIENT");
    toUpperKebabCaseTest("My HTTP Client", "MY-HTTP-CLIENT");
    toUpperKebabCaseTest("myHTTPClient", "MYHTTPCLIENT");
    toUpperKebabCaseTest("First Sentence. Second Sentence", "FIRST-SENTENCE. SECOND-SENTENCE");
    toUpperKebabCaseTest("a b . . . c d", "A-B . . . C-D");
    toUpperKebabCaseTest("I Am Trying", "I-AM-TRYING");
    toUpperKebabCaseTest("abcDef ghiJkl", "ABCDEF-GHIJKL");
    toUpperKebabCaseTest("lee7 c0d3", "LEE7-C0D3")
    toUpperKebabCaseTest("simple3test", "SIMPLE3TEST");
    toUpperKebabCaseTest("a-kebab-case-example", "A-KEBAB-CASE-EXAMPLE");
    toUpperKebabCaseTest("a_snake_case_example", "A-SNAKE-CASE-EXAMPLE");
    toUpperKebabCaseTest("APascalCaseExample", "APASCALCASEEXAMPLE");
    toUpperKebabCaseTest("AnotherPascalCaseExample", "ANOTHERPASCALCASEEXAMPLE");
});