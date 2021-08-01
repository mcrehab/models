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
exports.Team = void 0;
var typeorm_1 = require("typeorm");
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var User_1 = require("../RBAC/User");
var Server_1 = require("../Servers/Server");
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty()
    ], Team.prototype, "name");
    __decorate([
        swagger_1.ApiProperty({ nullable: true })
    ], Team.prototype, "description");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.ManyToOne(function (type) { return User_1.User; })
    ], Team.prototype, "owner");
    __decorate([
        swagger_1.ApiProperty({ type: User_1.User, isArray: true }),
        typeorm_1.ManyToMany(function (type) { return User_1.User; }),
        typeorm_1.JoinTable({ name: 'teams_users' })
    ], Team.prototype, "users");
    __decorate([
        swagger_1.ApiProperty({ type: function () { return Server_1.Server; }, isArray: true }),
        typeorm_1.ManyToMany(function (type) { return Server_1.Server; }, function (server) { return server.teams; }),
        typeorm_1.JoinTable({ name: 'teams_servers' })
    ], Team.prototype, "servers");
    Team = __decorate([
        typeorm_1.Entity('teams')
    ], Team);
    return Team;
}(EntityBase_1.EntityBase));
exports.Team = Team;
