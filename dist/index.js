"use strict";
var accounts_1 = require('./accounts');
var categories_1 = require('./categories');
var me_1 = require('./me');
var Promise = require('bluebird');
var client_1 = require('./client');
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.token = (function (t) {
            return (/^Key|Bearer/i.test(t)) ? t : "Key " + t;
        })(this.token);
        client_1.default.token = this.token;
        this.Accounts = accounts_1.default;
        this.Categories = categories_1.default;
        this.Me = void 0;
    }
    PocketSmith.prototype.init = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve) {
            if (_this.Me === void 0) {
                ((_this.Me = new me_1.default()), _this.Me.init()).then(function () {
                    client_1.default.Me = _this.Me;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFxQixZQUFZLENBQUMsQ0FBQTtBQUNsQywyQkFBdUIsY0FBYyxDQUFDLENBQUE7QUFDdEMsbUJBQWUsTUFBTSxDQUFDLENBQUE7QUFFdEIsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDcEMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBRTlCO0lBTUMscUJBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFDLENBQVM7WUFDdkIsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFPLENBQUcsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFZixnQkFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUFBLGlCQWdCQztRQWZBLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQztRQUU1QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsS0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFlBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFFM0MsZ0JBQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQztvQkFFcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFFRCxpQkFBUyxXQUFXLENBQUMifQ==