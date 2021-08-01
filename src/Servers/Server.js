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
exports.Server = void 0;
var typeorm_1 = require("typeorm");
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var ServerProperty_1 = require("./Properties/ServerProperty");
var ServerWhitelist_1 = require("./Whitelist/ServerWhitelist");
var Team_1 = require("../Teams/Team");
var ServerLog_1 = require("./Logs/ServerLog");
var User_1 = require("../RBAC/User");
var ServerTypeVersion_1 = require("./Types/Versions/ServerTypeVersion");
var ServerType_1 = require("./Types/ServerType");
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.ManyToOne(function (type) { return User_1.User; })
    ], Server.prototype, "user");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Server.prototype, "name");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Server.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.ManyToOne(function () { return ServerType_1.ServerType; })
    ], Server.prototype, "type");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.ManyToOne(function () { return ServerTypeVersion_1.ServerTypeVersion; })
    ], Server.prototype, "typeVersion");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ nullable: true })
    ], Server.prototype, "address");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Server.prototype, "status");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], Server.prototype, "public");
    __decorate([
        swagger_1.ApiProperty({ type: ServerProperty_1.ServerProperty, isArray: true }),
        typeorm_1.OneToMany(function (type) { return ServerProperty_1.ServerProperty; }, function (properties) { return properties.server; }),
        typeorm_1.JoinColumn()
    ], Server.prototype, "properties");
    __decorate([
        swagger_1.ApiProperty({ type: ServerWhitelist_1.ServerWhitelist, isArray: true }),
        typeorm_1.OneToMany(function (type) { return ServerWhitelist_1.ServerWhitelist; }, function (whitelist) { return whitelist.server; }),
        typeorm_1.JoinColumn()
    ], Server.prototype, "whitelist");
    __decorate([
        swagger_1.ApiProperty({ type: ServerLog_1.ServerLog, isArray: true }),
        typeorm_1.OneToMany(function (type) { return ServerLog_1.ServerLog; }, function (logs) { return logs.server; }),
        typeorm_1.JoinColumn()
    ], Server.prototype, "logs");
    __decorate([
        swagger_1.ApiProperty({ type: Team_1.Team, isArray: true }),
        typeorm_1.ManyToMany(function (type) { return Team_1.Team; }, function (team) { return team.servers; }),
        typeorm_1.JoinColumn()
    ], Server.prototype, "teams");
    Server = __decorate([
        typeorm_1.Entity('servers'),
        typeorm_1.Unique(['user', 'name'])
    ], Server);
    return Server;
}(EntityBase_1.EntityBase));
exports.Server = Server;
