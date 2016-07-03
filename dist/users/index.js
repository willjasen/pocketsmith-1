"use strict";
var Users = (function () {
    function Users(context) {
        this.context = context;
    }
    Users.prototype.get = function (id, callback) {
        return this.context.Client.get("users/" + id, callback);
    };
    return Users;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBQ0MsZUFBb0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFFakQsQ0FBQztJQUVELG1CQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBbUI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLEVBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0YsWUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUkQ7dUJBUUMsQ0FBQSJ9