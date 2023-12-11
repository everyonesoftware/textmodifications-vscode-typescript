import * as assert from "assert"

import * as strings from "../../sources/strings"

suite("strings", () =>
{
    suite("join(string, string[])", () =>
    {
        function joinTest(separator: string, values: string[], expected: string): void
        {
            test(`with ${strings.escapeAndQuote(separator)} and ${values.map(v => strings.escapeAndQuote(v))}`, () =>
            {
                assert.strictEqual(strings.join(separator, values), expected);
            });
        }

        joinTest(undefined!, [], "");
        joinTest(undefined!, ["a"], "a");
        joinTest(undefined!, ["a", "b"], "ab");
        joinTest(undefined!, ["a", "b", "c"], "abc");

        joinTest(null!, [], "");
        joinTest(null!, ["a"], "a");
        joinTest(null!, ["a", "b"], "ab");
        joinTest(null!, ["a", "b", "c"], "abc");

        joinTest("", [], "");
        joinTest("", ["a"], "a");
        joinTest("", ["a", "b"], "ab");
        joinTest("", ["a", "b", "c"], "abc");

        joinTest(" ", [], "");
        joinTest(" ", ["a"], "a");
        joinTest(" ", ["a", "b"], "a b");
        joinTest(" ", ["a", "b", "c"], "a b c");

        joinTest(" _ ", [], "");
        joinTest(" _ ", ["a"], "a");
        joinTest(" _ ", ["a", "b"], "a _ b");
        joinTest(" _ ", ["a", "b", "c"], "a _ b _ c");
    });

    suite("escape(string|undefined|null,string[]|undefined)", () =>
    {
        function escapeTest(value: string | undefined | null, dontEscape: string[] | undefined, expected: string): void
        {
            test(`with ${strings.escapeAndQuote(value)} and ${dontEscape?.map((value: string) => strings.escapeAndQuote(value))}`, () =>
            {
                const result: string = strings.escape(value, dontEscape);
                assert.strictEqual(result, expected);
            });
        }

        escapeTest(undefined, undefined, "undefined");
        escapeTest(null, undefined, "null");
        escapeTest("", undefined, "");
        escapeTest("a", undefined, "a");
        escapeTest("A", undefined, "A");
        escapeTest("abc", undefined, "abc");
        escapeTest("\t", undefined, "\\t");
        escapeTest("\n", undefined, "\\n");
        escapeTest("\r", undefined, "\\r");
        escapeTest("'", undefined, "\\'");
        escapeTest("\"", undefined, "\\\"");
        escapeTest("&", undefined, "&");
        escapeTest(" \r\n \t ", undefined, " \\r\\n \\t ");
        escapeTest("\t", [], "\\t");
        escapeTest("\t", ["\n"], "\\t");
        escapeTest("\t", ["\t"], "\t");
    });

    suite("quote(string|undefined|null)", () =>
    {
        function quoteTest(value: string | undefined | null, quote: string | undefined, expected: string): void
        {
            test(`with ${strings.escapeAndQuote(value)} and ${strings.escapeAndQuote(quote)}`, () =>
            {
                const result: string = strings.quote(value, quote);
                assert.strictEqual(result, expected);
            });
        }

        quoteTest(undefined, undefined, "undefined");
        quoteTest(null, undefined, "null");
        quoteTest("", undefined, `""`);
        quoteTest("a", undefined, `"a"`);
        quoteTest("A", undefined, `"A"`);
        quoteTest("abc", undefined, `"abc"`);
        quoteTest("abc", "'", `'abc'`);
    });

    suite("escapeAndQuote(string|undefined|null,string|undefined,string[]|undefined)", () =>
    {
        function escapeAndQuoteTest(value: string | undefined | null, quote: string | undefined, dontEscape: string[] | undefined, expected: string): void
        {
            test(`with ${strings.escapeAndQuote(value)}, ${strings.escapeAndQuote(quote)}, and ${dontEscape?.map((value: string) => strings.escapeAndQuote(value))}`, () =>
            {
                const result: string = strings.escapeAndQuote(value, quote, dontEscape);
                assert.strictEqual(result, expected);
            });
        }

        escapeAndQuoteTest(undefined, undefined, undefined, "undefined");
        escapeAndQuoteTest(null, undefined, undefined, "null");
        escapeAndQuoteTest("", undefined, undefined, `""`);
        escapeAndQuoteTest("a", undefined, undefined, `"a"`);
        escapeAndQuoteTest("A", undefined, undefined, `"A"`);
        escapeAndQuoteTest("abc", undefined, undefined, `"abc"`);
        escapeAndQuoteTest("\t", undefined, undefined, `"\\t"`);
        escapeAndQuoteTest("\n", undefined, undefined, `"\\n"`);
        escapeAndQuoteTest("\r", undefined, undefined, `"\\r"`);
        escapeAndQuoteTest("'", undefined, undefined, `"\\'"`);
        escapeAndQuoteTest("\"", undefined, undefined, `"\\\""`);
        escapeAndQuoteTest("&", undefined, undefined, `"&"`);
        escapeAndQuoteTest(" \r\n \t ", undefined, undefined, `" \\r\\n \\t "`);
        escapeAndQuoteTest("\t", undefined, [], `"\\t"`);
        escapeAndQuoteTest("\t", undefined, ["\n"], `"\\t"`);
        escapeAndQuoteTest("\t", undefined, ["\t"], `"\t"`);
    });
});