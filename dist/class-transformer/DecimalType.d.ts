type DecimalTransferObject = {
    d: string[];
    e: string;
    s: string;
};
/**
 * Function that transforms a plain {@link Object} to a {@link Decimal}.
 * @param decimalTO
 */
export declare const createDecimalFromObject: (decimalTO: DecimalTransferObject) => any;
/**
 * Decorator that helps `class-transformer` to transform/parse a {@link Decimal} type.
 *
 * This is because behind the scenes, `class-transformer` calls {@link Decimal} constructor
 * without any arguments, which results in an error. Instead, we make `class-transformer`
 * use a normal {@link Object}, copy all the properties from the {@link Decimal} instance,
 * and then we manually create a new {@link Decimal} instance.
 *
 * @see https://github.com/unlight/prisma-graphql-type-decimal
 */
export declare const DecimalType: () => PropertyDecorator;
export {};
