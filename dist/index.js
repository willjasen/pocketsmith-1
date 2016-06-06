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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFxQixZQUFZLENBQUMsQ0FBQTtBQUNsQyx1QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFFOUI7SUFJQyxxQkFBbUIsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDL0IsZ0JBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFFRCxpQkFBUyxXQUFXLENBQUMifQ==