import { Decimal } from '@prisma/client/runtime';
import { ValueNode } from 'graphql/language';
import { CustomScalar } from '@nestjs/graphql';
export declare class DecimalScalar implements CustomScalar<number, Decimal> {
    description: string;
    serialize(value: Decimal): number;
    parseValue(value: number): Decimal;
    parseLiteral(ast: ValueNode): Decimal;
}
