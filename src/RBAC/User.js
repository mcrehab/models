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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.User = void 0;
var EntityBase_1 = require("@nestjs.pro/common/dist/entities/EntityBase");
var swagger_1 = require("@nestjs/swagger");
var bcrypt = require("bcrypt");
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var Organization_1 = require("./Organization");
var Role_1 = require("./Role");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.hashPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.password && !this.password.match(/\$2b\$10\$/))) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, bcrypt.hash(this.password, 10)];
                    case 1:
                        _a.password = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    User.patchableFields = ['email', 'firstname', 'lastname'];
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Organization_1.Organization; }, function (organization) { return organization.users; }, { eager: true })
    ], User.prototype, "organization");
    __decorate([
        typeorm_1.BeforeInsert(),
        typeorm_1.BeforeUpdate()
    ], User.prototype, "hashPassword");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column(),
        class_transformer_1.Exclude({ toPlainOnly: true })
    ], User.prototype, "password");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], User.prototype, "status");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "firstname");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "lastname");
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column({ nullable: true, length: 255 })
    ], User.prototype, "forgotToken");
    __decorate([
        typeorm_1.Column({ nullable: true, length: 255 })
    ], User.prototype, "confirmToken");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Role_1.Role; }, function (role) { return role.users; }, { eager: true }),
        typeorm_1.JoinTable({ name: 'rbac_users_roles_links' })
    ], User.prototype, "roles");
    User = __decorate([
        typeorm_1.Entity('rbac_users'),
        typeorm_1.Index(['email'], { unique: true })
    ], User);
    return User;
}(EntityBase_1.EntityBase));
exports.User = User;
