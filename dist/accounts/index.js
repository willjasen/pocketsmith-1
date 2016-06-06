"use strict";
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.prototype.getAllByUser = function (userId, callback) {
        return client_1.default.get("users/" + userId + "/accounts", callback);
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBSUEsQ0FBQztJQUhBLCtCQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsUUFBbUI7UUFDL0MsTUFBTSxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsTUFBTSxjQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUVEO2tCQUFlLFFBQVEsQ0FBQyJ9