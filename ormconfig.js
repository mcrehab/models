"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
require("reflect-metadata");
var ModelsModule_1 = require("./src/ModelsModule");
dotenv.config();
var config = ModelsModule_1.ModelsModule.getConfig();
exports["default"] = config;
