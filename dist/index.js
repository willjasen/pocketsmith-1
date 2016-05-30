"use strict";
var accounts_1 = require('./accounts');
var client_1 = require('./client');
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        client_1.default.token = token;
        this.Accounts = new accounts_1.default();
    }
    return PocketSmith;
}());
module.exports = PocketSmith;
