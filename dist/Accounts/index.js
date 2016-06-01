"use strict";
var Promise = require('bluebird');
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
        client_1.default.get('me')
            .then(function (resp) {
            console.log(resp);
        });
    }
    Accounts.prototype.getAll = function () {
        return new Promise(function (resolve) {
        });
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
