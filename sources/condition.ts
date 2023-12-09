/**
 * A collection of condition methods that can be used to assert the state of an application.
 */
export class Condition
{
    private readonly createErrorFunction: (message: string) => Error;

    protected constructor(createErrorFunction: (message: string) => Error)
    {
        this.createErrorFunction = createErrorFunction;
    }

    /**
     * Create a new {@link Condition} object.
     * @param createErrorFunction The function to use to create this {@link Condition}'s errors. If
     * no function is provided, then a default function that creates an {@link Error} from the
     * provided message will be used.
     */
    public static create(createErrorFunction?: (message: string) => Error): Condition
    {
        if (createErrorFunction === undefined)
        {
            createErrorFunction = (message: string) => new Error(message);
        }
        return new Condition(createErrorFunction);
    }

    /**
     * Assert that the provided value is not undefined and not null.
     * @param value The value to check.
     */
    public assertNotUndefinedAndNotNull<T>(value: T): asserts value is NonNullable<T>
    {
        if (value === undefined || value === null)
        {
            throw this.createErrorFunction(`Expected: not undefined and not null, Actual: ${value}`);
        }
    }

    /**
     * Assert that the provided value is true.
     * @param value The value to check.
     */
    public assertTrue(value: boolean): asserts value is true
    {
        if (!value)
        {
            throw this.createErrorFunction(`Expected: true, Actual: ${value}`);
        }
    }

    /**
     * Assert that the provided value is false.
     * @param value The value to check.
     */
    public assertFalse(value: boolean): asserts value is false
    {
        if (value)
        {
            throw this.createErrorFunction(`Expected: false, Actual: ${value}`);
        }
    }
}

/**
 * An error that is thrown when a pre-condition fails.
 */
export class PreConditionError extends Error
{
    public constructor(message?: string)
    {
        super(message);
    }
}

/**
 * An error that is thrown when a post-condition fails.
 */
export class PostConditionError extends Error
{
    public constructor(message?: string)
    {
        super(message);
    }
}

/**
 * A type that encapsulates conditions that should exist before an operation takes place.
 */
export class Pre
{
    /**
     * The condition object that can be used to assert pre-conditions.
     */
    public static readonly Condition: Condition = Condition.create((message: string) => new PreConditionError(message));
}

/**
 * A type that encapsulates conditions that should exist after an operation has taken place.
 */
export class Post
{
    /**
     * The condition object that can be used to assert post-conditions.
     */
    public static readonly Condition: Condition = Condition.create((message: string) => new PostConditionError(message));
}