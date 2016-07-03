"use strict";
var exceptions_1 = require('../exceptions');
var Accounts = (function () {
    function Accounts(context) {
        this.context = context;
    }
    Accounts.prototype.get = function (id, callback) {
        return this.context.Client.get("accounts/" + id, callback);
    };
    Accounts.prototype.getAllByUser = function (userId, callback) {
        return this.context.Client.get("users/" + userId + "/accounts", callback);
    };
    Accounts.prototype.getAllByInstitution = function (institutionId, callback) {
        return this.context.Client.get("institutions/" + institutionId + "/accounts", callback);
    };
    Accounts.prototype.getAll = function (callback) {
        if (this.context.Me) {
            return this.getAllByUser(this.context.Me.data.id, callback);
        }
        else {
            throw exceptions_1.NotInMeContext();
        }
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLDJCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUU3QztJQUNDLGtCQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUVqRCxDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFJLEVBQVUsRUFBRSxRQUFtQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQVksRUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLFFBQW1CO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLGNBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5CLFVBQW9CLGFBQXFCLEVBQUUsUUFBbUI7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsYUFBYSxjQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUdELHlCQUFNLEdBQU4sVUFBTyxRQUFtQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLDJCQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0YsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJEOzBCQXlCQyxDQUFBIn0=