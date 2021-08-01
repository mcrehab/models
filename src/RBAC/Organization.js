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
exports.Organization = void 0;
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var Permission_1 = require("./Permission");
var Role_1 = require("./Role");
var User_1 = require("./User");
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Organization.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.OneToMany(function (type) { return Role_1.Role; }, function (roles) { return roles.organization; })
    ], Organization.prototype, "roles");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.OneToMany(function (type) { return Permission_1.Permission; }, function (permissions) { return permissions.organization; })
    ], Organization.prototype, "permissions");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.ManyToMany(function (type) { return User_1.User; }, function (user) { return user.organization; }),
        typeorm_1.JoinTable({ name: 'rbac_organizations_users_links' })
    ], Organization.prototype, "users");
    Organization = __decorate([
        typeorm_1.Entity({ name: 'rbac_organizations' })
    ], Organization);
    return Organization;
}(EntityBase_1.EntityBase));
exports.Organization = Organization;
