"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalScalar = void 0;
const runtime_1 = require("@prisma/client/runtime");
const graphql_1 = require("@nestjs/graphql");
let DecimalScalar = class DecimalScalar {
    constructor() {
        this.description = "A scalar type for Prisma's Decimal values";
    }
    serialize(value) {
        return value.toNumber();
    }
    parseValue(value) {
        return new runtime_1.Decimal(value);
    }
    parseLiteral(ast) {
        if (ast.kind === 'IntValue') {
            return new runtime_1.Decimal(ast.value);
        }
        return null;
    }
};
DecimalScalar = __decorate([
    (0, graphql_1.Scalar)('DecimalScalar')
], DecimalScalar);
exports.DecimalScalar = DecimalScalar;
//# sourceMappingURL=DecimalScalar.js.map