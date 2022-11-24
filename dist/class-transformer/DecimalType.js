"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDecimalFromObject = void 0;
const runtime_1 = require("@prisma/client/runtime");
const class_transformer_1 = require("class-transformer");
/**
 * Function that transforms a plain {@link Object} to a {@link Decimal}.
 * @param decimalTO
 */
const createDecimalFromObject = (decimalTO) => Object.create(runtime_1.Decimal.prototype, {
    d: { value: decimalTO.d },
    e: { value: decimalTO.e },
    s: { value: decimalTO.s },
});
exports.createDecimalFromObject = createDecimalFromObject;
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
const DecimalType = () => {
    const transformFunction = ({ value }) => Array.isArray(value)
        ? value.map(exports.createDecimalFromObject)
        : (0, exports.createDecimalFromObject)(value);
    return (target, propertyKey) => {
        (0, class_transformer_1.Type)(() => Object)(target, propertyKey);
        (0, class_transformer_1.Transform)(transformFunction)(target, propertyKey);
    };
};
exports.default = DecimalType;
//# sourceMappingURL=DecimalType.js.map