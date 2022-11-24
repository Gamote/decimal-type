# decimal-type

[![npm version](https://img.shields.io/npm/v/decimal-type)](https://www.npmjs.com/package/decimal-type) [![npm downloads/month](https://img.shields.io/npm/dm/decimal-type)](https://www.npmjs.com/package/decimal-type) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Gamote/decimal-type/blob/main/LICENSE)

A collection of helper functions for working with decimal numbers in various JS/TS environments.

## Installation

```shell
# With Yarn
yarn add decimal-type

# or with npm
npm i decimal-type
```

## Usage

As this is more like a bundle, you are free to combine the functions you need. Check the [Examples](#examples) section for some use cases.

## Examples

### Nest.js / GraphQL (code-first) / Prisma / class-transformer 

```ts
import { DecimalScalar, DecimalType } from 'decimal-type';
import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';

@InputType()
export class NewTransactionInput {
  @Field()
  name: string;

  @Field(() => DecimalScalar)
  @DecimalType()
  amount: Decimal;
}
```

> Info: If the `@DecimalType()` decorator is not used, `class-transformer` will not know how to transform the `Decimal` type returned by the `DecimalScalar` scalar into a new `Decimal` instance.
