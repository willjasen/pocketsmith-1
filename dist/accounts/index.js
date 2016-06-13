"use strict";
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.get = function (id, callback) {
        return client_1.default.get("accounts/" + id, callback);
    };
    Accounts.getAllByUser = function (userId, callback) {
        return client_1.default.get("users/" + userId + "/accounts", callback);
    };
    Accounts.getAllByInstitution = function (institutionId, callback) {
        return client_1.default.get("institutions/" + institutionId + "/accounts", callback);
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBWUEsQ0FBQztJQVhPLFlBQUcsR0FBVixVQUFXLEVBQVUsRUFBRSxRQUFtQjtRQUN6QyxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsY0FBWSxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLHFCQUFZLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxRQUFtQjtRQUN0RCxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLGNBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sNEJBQW1CLEdBQTFCLFVBQTJCLGFBQXFCLEVBQUUsUUFBbUI7UUFDcEUsTUFBTSxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFnQixhQUFhLGNBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWkQ7MEJBWUMsQ0FBQSJ9