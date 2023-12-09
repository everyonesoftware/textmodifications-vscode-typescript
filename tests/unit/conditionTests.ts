import * as assert from "assert"

import { Condition, Pre, Post, PostConditionError, PreConditionError } from "../../sources/condition"

suite(Condition.name, () =>
{
    suite("create((string) => Error)", () =>
    {
        test("with no arguments", () =>
        {
            const condition: Condition = Condition.create();
            assert.notStrictEqual(condition, undefined);
            assert.throws(() => condition.assertFalse(true),
                new Error("Expected: false, Actual: true"));
        });

        test("with undefined", () =>
        {
            const condition: Condition = Condition.create(undefined);
            assert.notStrictEqual(condition, undefined);
            assert.throws(() => condition.assertFalse(true),
                new Error("Expected: false, Actual: true"));
        });

        test("with defined", () =>
        {
            const condition: Condition = Condition.create((message: string) =>
            {
                return new PostConditionError(`aaa ${message} aaa`);
            });
            assert.notStrictEqual(condition, undefined);
            assert.throws(() => condition.assertFalse(true),
                new PostConditionError("aaa Expected: false, Actual: true aaa"));
        });
    });

    suite("assertNotUndefinedAndNotNull<T>(undefined|null|T)", () =>
    {
        test("with undefined", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertNotUndefinedAndNotNull(undefined),
                new Error("Expected: not undefined and not null, Actual: undefined"));
        });

        test("with null", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertNotUndefinedAndNotNull(null),
                new Error("Expected: not undefined and not null, Actual: null"));
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
    });

    suite("assertTrue(boolean)", () =>
    {
        test("with false", () =>
        {
            const condition: Condition = Condition.create();
            assert.throws(() => condition.assertTrue(false),
                new Error("Expected: true, Actual: false"));
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
                new Error("Expected: false, Actual: true"));
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
});

suite(Pre.name, () =>
{
    test("Condition is not undefined and not null", () =>
    {
        assert.notStrictEqual(Pre.Condition, undefined);
        assert.notStrictEqual(Pre.Condition, null);
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
        assert.notStrictEqual(Post.Condition, undefined);
        assert.notStrictEqual(Post.Condition, null);
    });
});