"use strict";
var accounts_1 = require('./accounts');
var categories_1 = require('./categories');
var me_1 = require('./me');
var Promise = require('bluebird');
var client_1 = require('./client');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHlCQUFxQixZQUFZLENBQUMsQ0FBQTtBQUNsQywyQkFBdUIsY0FBYyxDQUFDLENBQUE7QUFDdEMsbUJBQWUsTUFBTSxDQUFDLENBQUE7QUFFdEIsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDcEMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBRTlCO0lBUUMscUJBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRnpCLE9BQUUsR0FBTyxLQUFLLENBQUMsQ0FBQztRQUd0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBQyxDQUFTO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBTyxDQUFHLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQztRQUU3QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsSUFBSSxZQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBRW5DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUViLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixDQUFDO1FBRUYsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBRUQsaUJBQVMsV0FBVyxDQUFDIn0=