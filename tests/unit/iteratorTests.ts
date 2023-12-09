import * as assert from "assert";

import { PreConditionError } from "../../sources/condition";
import { StringIterator } from "../../sources/iterator";

suite(StringIterator.name, () =>
{
    suite("create(string)", () =>
    {
        function createErrorTest(value: string | undefined | null, expectedError: Error): void
        {
            test(`with ${value}`, () =>
            {
                assert.throws(() => StringIterator.create(value!),
                    expectedError);
            });
        }

        createErrorTest(
            undefined,
            new PreConditionError([
                "Expression: value",
                "Expected: not undefined and not null",
                "Actual: undefined",
            ].join("\n")));
        createErrorTest(
            null,
            new PreConditionError([
                "Expression: value",
                "Expected: not undefined and not null",
                "Actual: null",
            ].join("\n")));

        function createTest(value: string): void
        {
            test(`with "${value}"`, () =>
            {
                const iterator: StringIterator = StringIterator.create(value);
                assert.strictEqual(iterator.hasStarted(), false);
                assert.strictEqual(iterator.hasCurrent(), false);
                assert.throws(() => iterator.getCurrentIndex(),
                    new PreConditionError([
                        "Expression: this.hasCurrent()",
                        "Expected: true",
                        "Actual: false",
                    ].join("\n")));
                assert.throws(() => iterator.getCurrent(),
                    new PreConditionError([
                        "Expression: this.hasCurrent()",
                        "Expected: true",
                        "Actual: false",
                    ].join("\n")));
            });
        }

        createTest("");
        createTest("abc");
    });

    suite("next()", () =>
    {
        function nextTest(value: string): void
        {
            test(`with "${value}"`, () =>
            {
                const iterator: StringIterator = StringIterator.create(value);

                for (let i = 0; i < value.length; i++)
                {
                    assert.strictEqual(iterator.next(), true);
                    assert.strictEqual(iterator.hasStarted(), true);
                    assert.strictEqual(iterator.hasCurrent(), true);
                    assert.strictEqual(iterator.getCurrentIndex(), i);
                    assert.strictEqual(iterator.getCurrent(), value[i]);
                }

                for (let i = 0; i < 2; i++)
                {
                    assert.strictEqual(iterator.next(), false);
                    assert.strictEqual(iterator.hasStarted(), true);
                    assert.strictEqual(iterator.hasCurrent(), false);
                    assert.throws(() => iterator.getCurrentIndex(),
                        new PreConditionError([
                            "Expression: this.hasCurrent()",
                            "Expected: true",
                            "Actual: false",
                        ].join("\n")));
                    assert.throws(() => iterator.getCurrent(),
                        new PreConditionError([
                            "Expression: this.hasCurrent()",
                            "Expected: true",
                            "Actual: false",
                        ].join("\n")));
                }
            });
        }

        nextTest("");
        nextTest("a");
        nextTest("abc");
    });
});