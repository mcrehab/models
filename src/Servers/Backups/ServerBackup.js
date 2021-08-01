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
exports.ServerBackup = void 0;
var typeorm_1 = require("typeorm");
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var Server_1 = require("../Server");
var _erverBackupStatus_1 = require("./\u00DFerverBackupStatus");
var ServerBackup = /** @class */ (function (_super) {
    __extends(ServerBackup, _super);
    function ServerBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerBackup.editable = ['name', 'description'];
    __decorate([
        swagger_1.ApiProperty({ type: function () { return Server_1.Server; } }),
        typeorm_1.ManyToOne(function () { return Server_1.Server; })
    ], ServerBackup.prototype, "server");
    __decorate([
        swagger_1.ApiProperty({ "enum": _erverBackupStatus_1.ServerBackupStatus }),
        typeorm_1.Column({ "default": _erverBackupStatus_1.ServerBackupStatus.PENDING })
    ], ServerBackup.prototype, "status");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], ServerBackup.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ nullable: true })
    ], ServerBackup.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ type: 'text', nullable: true })
    ], ServerBackup.prototype, "output");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ nullable: true })
    ], ServerBackup.prototype, "size");
    ServerBackup = __decorate([
        typeorm_1.Entity('servers_backups'),
        typeorm_1.Unique(['server', 'name'])
    ], ServerBackup);
    return ServerBackup;
}(EntityBase_1.EntityBase));
exports.ServerBackup = ServerBackup;
