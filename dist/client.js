"use strict";
var Request = require('request');
var Promise = require('bluebird');
var Client = (function () {
    function Client() {
    }
    Client.prototype.resource = function (method, url, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Request({
                method: method,
                url: "https://api.pocketsmith.com/v2/" + url,
                headers: {
                    'Authorization': (function (t) {
                        return (/Key/.test(t)) ? t : "Key " + t;
                    })(_this.token),
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
    Client.prototype.get = function (url) {
        return this.resource('GET', url);
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Client();
