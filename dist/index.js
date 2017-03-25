"use strict";
var accounts_1 = require("./accounts");
var categories_1 = require("./categories");
var users_1 = require("./users");
var transactions_1 = require("./transactions");
var me_1 = require("./me");
var Promise = require("bluebird");
var client_1 = require("./client");
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.Me = void 0;
        this.token = (function (t) {
            return (/^Key|Bearer/i.test(t)) ? t : "Key " + t;
        })(this.token);
        this.Client = new client_1.default(this.token);
        this.Accounts = new accounts_1.default(this);
        this.Categories = new categories_1.default(this);
        this.Users = new users_1.default(this);
        this.Transactions = new transactions_1.default(this);
    }
    PocketSmith.prototype.init = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve) {
            if (_this.Me === void 0) {
                ((new me_1.default(self)).init()).then(function (Me) {
                    self.Me = Me;
                    resolve(self);
                });
            }
            else {
                resolve(self);
            }
        });
    };
    return PocketSmith;
}());
module.exports = PocketSmith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHVDQUFrQztBQUNsQywyQ0FBc0M7QUFDdEMsaUNBQTRCO0FBQzVCLCtDQUEwQztBQUMxQywyQkFBc0I7QUFFdEIsa0NBQW9DO0FBQ3BDLG1DQUE4QjtBQUU5QjtJQVVDLHFCQUFtQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUZ6QixPQUFFLEdBQU8sS0FBSyxDQUFDLENBQUM7UUFHdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQUMsQ0FBUztZQUN2QixNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQU8sQ0FBRyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQUEsaUJBY0M7UUFiQSxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxJQUFJLFlBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUFFRCxpQkFBUyxXQUFXLENBQUMifQ==