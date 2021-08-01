"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BillingMethod = void 0;
var typeorm_1 = require("typeorm");
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var User_1 = require("../../RBAC/User");
var BillingMethod = /** @class */ (function (_super) {
    __extends(BillingMethod, _super);
    function BillingMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.OneToOne(function () { return User_1.User; }),
        typeorm_1.JoinColumn()
    ], BillingMethod.prototype, "user");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], BillingMethod.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], BillingMethod.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], BillingMethod.prototype, "stripeId");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], BillingMethod.prototype, "expires");
    BillingMethod = __decorate([
        typeorm_1.Entity('billing_methods'),
        typeorm_1.Unique(['user', 'name'])
    ], BillingMethod);
    return BillingMethod;
}(EntityBase_1.EntityBase));
exports.BillingMethod = BillingMethod;
