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
exports.ServerTypeVersion = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var ServerType_1 = require("../ServerType");
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var ServerTypeVersion = /** @class */ (function (_super) {
    __extends(ServerTypeVersion, _super);
    function ServerTypeVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return ServerType_1.ServerType; })
    ], ServerTypeVersion.prototype, "type");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], ServerTypeVersion.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], ServerTypeVersion.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], ServerTypeVersion.prototype, "version");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], ServerTypeVersion.prototype, "jarUrl");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], ServerTypeVersion.prototype, "siteUrl");
    ServerTypeVersion = __decorate([
        typeorm_1.Entity('server_types_versions')
    ], ServerTypeVersion);
    return ServerTypeVersion;
}(EntityBase_1.EntityBase));
exports.ServerTypeVersion = ServerTypeVersion;
