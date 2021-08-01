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
exports.Permission = void 0;
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var Organization_1 = require("./Organization");
var Role_1 = require("./Role");
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsUUID('4'),
        typeorm_1.ManyToOne(function (type) { return Organization_1.Organization; }, function (organization) { return organization.permissions; }, { eager: true })
    ], Permission.prototype, "organization");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Permission.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Permission.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.ManyToMany(function (type) { return Role_1.Role; }, function (role) { return role.permissions; }, { cascade: true }),
        typeorm_1.JoinTable({
            name: 'rbac_permissions_roles_links',
            joinColumn: { name: 'permission_id' },
            inverseJoinColumn: { name: 'role_id' }
        })
    ], Permission.prototype, "roles");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Permission.prototype, "type");
    Permission = __decorate([
        typeorm_1.Entity({ name: 'rbac_permissions' }),
        typeorm_1.Index(['organization', 'name'], { unique: true })
    ], Permission);
    return Permission;
}(EntityBase_1.EntityBase));
exports.Permission = Permission;
