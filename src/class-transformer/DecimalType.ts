import { Decimal } from '@prisma/client/runtime';
import { Transform, TransformFnParams, Type } from 'class-transformer';

type DecimalTransferObject = {
  d: string[];
  e: string;
  s: string;
};

/**
 * Function that transforms a plain {@link Object} to a {@link Decimal}.
 * @param decimalTO
 */
export const createDecimalFromObject = (decimalTO: DecimalTransferObject) =>
  Object.create(Decimal.prototype, {
    d: { value: decimalTO.d },
    e: { value: decimalTO.e },
    s: { value: decimalTO.s },
  });

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
export const DecimalType = (): PropertyDecorator => {
  const transformFunction = ({ value }: TransformFnParams) =>
    Array.isArray(value)
      ? value.map(createDecimalFromObject)
      : createDecimalFromObject(value);

  return (target, propertyKey) => {
    Type(() => Object)(target, propertyKey);
    Transform(transformFunction)(target, propertyKey);
  };
};
