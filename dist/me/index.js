"use strict";
var client_1 = require('../client');
var Promise = require('bluebird');
var Me = (function () {
    function Me() {
    }
    Me.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) {
            client_1.default.get('me').then(function (res) {
                _this.data = res;
                resolve(res);
            });
        });
    };
    return Me;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Me;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWdCQSx1QkFBbUIsV0FBVyxDQUFDLENBQUE7QUFDL0IsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFcEM7SUFBQTtJQVdBLENBQUM7SUFSQSxpQkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFOQSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQzFCLGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWdCO2dCQUN0QyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRixTQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYRDtvQkFXQyxDQUFBIn0=