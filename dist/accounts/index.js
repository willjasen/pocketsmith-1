"use strict";
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.prototype.getAllByUser = function (userId, callback) {
        return client_1.default.get("users/" + userId + "/accounts", callback);
    };
    Accounts.prototype.get = function (id, callback) {
        return client_1.default.get("accounts/" + id, callback);
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBUUEsQ0FBQztJQVBBLCtCQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsUUFBbUI7UUFDL0MsTUFBTSxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsTUFBTSxjQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBbUI7UUFDbEMsTUFBTSxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLGNBQVksRUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFFRDtrQkFBZSxRQUFRLENBQUMifQ==