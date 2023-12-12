import * as assert from "assert"

import { Condition, Pre, Post, PostConditionError, PreConditionError } from "../../sources/condition"
import { escapeAndQuote, join } from "../../sources/strings";
import { andList } from "../../sources/english";

suite(Condition.name, () =>
{
    suite("create((string) => Error)", () =>
    {
        test("with no arguments", () =>
        {
            const condition: Condition = Condition.create();
            assert.notStrictEqual(condition, undefined);
            assert.throws(() => condition.assertFalse(true),
                new Error([
                    "Expected: false",
                    "Actual: true",
                ].join("\n")));
        });

        test("with undefined", () =>
        {
            const condition: Condition = Condition.create(undefined);
            assert.notStrictEqual(condition, undefined);
            assert.throws(() => condition.assertFalse(true),
                new Error([
                    "Expected: false",
                    "Actual: true",
                ].join("\n")));
        });

        test("with defined", () =>
        {
            const condition: Condition = Condition.create((message: string) =>
            {
                return new PostConditionError(`aaa ${message} aaa`);
            });
            assert.notStrictEqual(condition, undefined);
            assert.throws(() => condition.assertFalse(true),
                new PostConditionError([
                    "aaa Expected: false",
                    "Actual: true aaa",
                ].join("\n")));
        });
    });

    suite("assertNotUndefinedAndNotNull<T>(undefined|null|T,string?,string?)", () =>
    {
        test("with undefined", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertNotUndefinedAndNotNull(undefined),
                new Error([
                    "Expected: not undefined and not null",
                    "Actual: undefined",
                ].join("\n")));
        });

        test("with null", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertNotUndefinedAndNotNull(null),
                new Error([
                    "Expected: not undefined and not null",
                    "Actual: null",
                ].join("\n")));
        });

        test("with not undefined and not null", () =>
        {
            function valueCreator(): string | undefined
            {
                return "hello";
            }

            const condition: Condition = Condition.create();
            const value: string | undefined = valueCreator();
            condition.assertNotUndefinedAndNotNull(value);
            assert.strictEqual(value.substring(1, 3), "el");
        });

        test("with undefined and expression", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertNotUndefinedAndNotNull(undefined, "fake-expression"),
                new Error([
                    "Expression: fake-expression",
                    "Expected: not undefined and not null",
                    "Actual: undefined"
                ].join("\n")));
        });

        test("with null, expression, and message", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertNotUndefinedAndNotNull(null, "fake-expression", "fake-message"),
                new Error([
                    "Message: fake-message",
                    "Expression: fake-expression",
                    "Expected: not undefined and not null",
                    "Actual: null"
                ].join("\n")));
        });
    });

    suite("assertTrue(boolean)", () =>
    {
        test("with false", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertTrue(false),
                new Error([
                    "Expected: true",
                    "Actual: false",
                ].join("\n")));
        });

        test("with true", () =>
        {
            function valueCreator(): boolean { return true; }
            const condition: Condition = Condition.create();
            const value: boolean = valueCreator();
            condition.assertTrue(value);
            assert.strictEqual(value, true);
        });
    });

    suite("assertFalse(boolean)", () =>
    {
        test("with true", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertFalse(true),
                new Error([
                    "Expected: false",
                    "Actual: true",
                ].join("\n")));
        });

        test("with false", () =>
        {
            function valueCreator(): boolean { return false; }
            const condition: Condition = Condition.create();
            const value: boolean = valueCreator();
            condition.assertFalse(value);
            assert.strictEqual(value, false);
        });
    });

    suite("assertNotEmpty(string,string?,string?)", () =>
    {
        function assertNotEmptyTest(value: string, expression: string | undefined, message: string | undefined, expectedError?: Error): void
        {
            test(`with ${andList([value, expression, message].map(x => escapeAndQuote(x)))}`, () =>
            {
                const condition: Condition = Condition.create();
                if (expectedError)
                {
                    assert.throws(() => condition.assertNotEmpty(value, expression, message), expectedError);
                }
                else
                {
                    condition.assertNotEmpty(value, expression, message);
                }
            });
        }

        assertNotEmptyTest(undefined!, "fake-expression", "fake-message", new Error(join("\n", [
            "Message: fake-message",
            "Expression: fake-expression",
            "Expected: not undefined and not null",
            "Actual: undefined",
        ])));
        assertNotEmptyTest(null!, "fake-expression", "fake-message", new Error(join("\n", [
            "Message: fake-message",
            "Expression: fake-expression",
            "Expected: not undefined and not null",
            "Actual: null",
        ])));
        assertNotEmptyTest("", "fake-expression", "fake-message", new Error(join("\n", [
            "Message: fake-message",
            "Expression: fake-expression",
            "Expected: not empty",
            "Actual: \"\"",
        ])));
        assertNotEmptyTest(" ", "fake-expression", "fake-message");
        assertNotEmptyTest("a", "fake-expression", "fake-message");
    });
});

suite(Pre.name, () =>
{
    test("Condition is not undefined and not null", () =>
    {
        assert.notStrictEqual(Pre.condition, undefined);
        assert.notStrictEqual(Pre.condition, null);
    });
});

suite(PreConditionError.name, () =>
{
    suite("constructor(string|undefined)", () =>
    {
        test("with no arguments", () =>
        {
            const error: PreConditionError = new PreConditionError();
            assert.notStrictEqual(error, undefined);
            assert.notStrictEqual(error, null);
            assert.strictEqual(error.name, "Error");
            assert.strictEqual(error.message, "");
            assert.notStrictEqual(error.stack, undefined);
            assert.notStrictEqual(error.stack, null);
        });
    });
});

suite(Post.name, () =>
{
    test("Condition is not undefined and not null", () =>
    {
        assert.notStrictEqual(Post.condition, undefined);
        assert.notStrictEqual(Post.condition, null);
    });
});

suite(PostConditionError.name, () =>
{
    suite("constructor(string|undefined)", () =>
    {
        test("with no arguments", () =>
        {
            const error: PostConditionError = new PostConditionError();
            assert.notStrictEqual(error, undefined);
            assert.notStrictEqual(error, null);
            assert.strictEqual(error.name, "Error");
            assert.strictEqual(error.message, "");
            assert.notStrictEqual(error.stack, undefined);
            assert.notStrictEqual(error.stack, null);
        });
    });
});