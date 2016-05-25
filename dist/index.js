"use strict";
var accounts_1 = require('./accounts');
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.Accounts = new accounts_1.default();
    }
    return PocketSmith;
}());
module.exports = PocketSmith;
