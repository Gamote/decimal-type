import { Decimal } from '@prisma/client/runtime';
import { ValueNode } from 'graphql/language';
import { CustomScalar, Scalar } from '@nestjs/graphql';

@Scalar('DecimalScalar')
export class DecimalScalar implements CustomScalar<number, Decimal> {
  description = "A scalar type for Prisma's Decimal values";

  serialize(value: Decimal): number {
    return value.toNumber();
  }

  parseValue(value: number): Decimal {
    return new Decimal(value);
  }

  parseLiteral(ast: ValueNode): Decimal {
    if (ast.kind === 'IntValue') {
      return new Decimal(ast.value);
    }

    return null;
  }
}
