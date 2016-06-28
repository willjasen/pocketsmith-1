"use strict";
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
            throw new Error('PocketSmith: Please init a `me` PocketSmith inistance. Eg: (new PocketSmith(\'token\')).init().then(() => { ... })');
        }
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBQ0Msa0JBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBRWpELENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksRUFBVSxFQUFFLFFBQW1CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBWSxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsUUFBbUI7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLE1BQU0sY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxzQ0FBbUIsR0FBbkIsVUFBb0IsYUFBcUIsRUFBRSxRQUFtQjtRQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFnQixhQUFhLGNBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFFBQW1CO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztRQUN2SSxDQUFDO0lBQ0YsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJEOzBCQXdCQyxDQUFBIn0=