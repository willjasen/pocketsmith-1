"use strict";
var Request = require('request');
var Promise = require('bluebird');
var Client = (function () {
    function Client() {
    }
    Client.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Request.get("https://api.pocketsmith.com/v2/" + url, {
                headers: {
                    'Authorization': _this.token,
                    'Content-Type': 'application/json'
                }
            }, function (e, req, body) {
                if (e != null) {
                    reject(e);
                }
                else {
                    resolve(JSON.parse(body));
                }
            });
        });
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Client();
