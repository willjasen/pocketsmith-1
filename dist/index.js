"use strict";
var accounts_1 = require('./accounts');
var transactions_1 = require('./transactions');
var client_1 = require('./client');
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.token = (function (t) {
            return (/^Key|Bearer/i.test(t)) ? t : "Key " + t;
        })(this.token);
        client_1.default.token = this.token;
        this.Accounts = new accounts_1.default();
        this.Transactions = new transactions_1.default();
    }
    return PocketSmith;
}());
module.exports = PocketSmith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFxQixZQUFZLENBQUMsQ0FBQTtBQUNsQyw2QkFBeUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUxQyx1QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFFOUI7SUFLQyxxQkFBbUIsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQUMsQ0FBUztZQUN2QixNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQU8sQ0FBRyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVmLGdCQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBRUQsaUJBQVMsV0FBVyxDQUFDIn0=