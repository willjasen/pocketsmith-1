"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
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
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0Q0FBNkM7QUFFN0M7SUFDQyxrQkFBb0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFFakQsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBbUI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFZLEVBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxRQUFtQjtRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsTUFBTSxjQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELHNDQUFtQixHQUFuQixVQUFvQixhQUFxQixFQUFFLFFBQW1CO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLGFBQWEsY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFHRCx5QkFBTSxHQUFOLFVBQU8sUUFBbUI7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSwyQkFBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNGLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQyJ9