"use strict";
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.prototype.get = function (id, callback) {
        return client_1.default.get("accounts/" + id, callback);
    };
    Accounts.prototype.getAllByUser = function (userId, callback) {
        return client_1.default.get("users/" + userId + "/accounts", callback);
    };
    Accounts.prototype.getAllByInstitution = function (institutionId, callback) {
        return client_1.default.get("institutions/" + institutionId + "/accounts", callback);
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBWUEsQ0FBQztJQVhBLHNCQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBbUI7UUFDbEMsTUFBTSxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLGNBQVksRUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLFFBQW1CO1FBQy9DLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLE1BQU0sY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxzQ0FBbUIsR0FBbkIsVUFBb0IsYUFBcUIsRUFBRSxRQUFtQjtRQUM3RCxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLGFBQWEsY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFFRDtrQkFBZSxRQUFRLENBQUMifQ==