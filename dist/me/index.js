"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("bluebird");
var Me = (function () {
    function Me(context) {
        this.context = context;
    }
    Me.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.context.Client.get('me').then(function (res) {
                _this.data = res;
                resolve(_this);
            });
        });
    };
    return Me;
}());
exports.default = Me;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBb0M7QUFHcEM7SUFHQyxZQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUVqRCxDQUFDO0lBRUQsaUJBQUksR0FBSjtRQUFBLGlCQU9DO1FBTkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBZ0I7Z0JBQ25ELEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixPQUFPLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLFNBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyJ9