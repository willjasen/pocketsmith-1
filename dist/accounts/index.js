"use strict";
var Promise = require('bluebird');
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.prototype.getAll = function (id, callback) {
        var prom = new Promise(function (resolve, reject) {
            client_1.default.get("users/" + id + "/accounts")
                .then(function (resp) {
                resolve(resp);
            }, function (e) {
                reject(e);
            });
        });
        if (callback) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
