"use strict";
var Promise = require('bluebird');
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Me;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBR3BDO0lBR0MsWUFBb0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFFakQsQ0FBQztJQUVELGlCQUFJLEdBQUo7UUFBQSxpQkFPQztRQU5BLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWdCO2dCQUNuRCxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixTQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmRDtvQkFlQyxDQUFBIn0=