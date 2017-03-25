"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("bluebird");
var Transactions = (function () {
    function Transactions(context) {
        this.context = context;
    }
    Transactions.prototype.getAll = function (query, userId, callback) {
        var _this = this;
        var page = 1;
        query.page = page;
        var url = "users/" + (userId || this.context.Me.data.id) + "/transactions";
        var req = this.context.Client.get(url, void 0, query);
        var nextCb = function (cb) {
            page += 1;
            query.page = page;
            var resp = _this.context.Client.get(url, void 0, query);
            resp.then(function (r) {
                cb({ data: r, next: nextCb });
            });
            return resp;
        };
        return new Promise(function (resolve, reject) {
            req.then(function (data) {
                resolve({ data: data, next: nextCb });
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    return Transactions;
}());
exports.default = Transactions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQW9DO0FBR3BDO0lBQ0Msc0JBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBRWpELENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sS0FBMEIsRUFBRSxNQUFlLEVBQUUsUUFBbUI7UUFBdkUsaUJBNEJDO1FBM0JBLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLEdBQUcsR0FBVyxZQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxtQkFBZSxDQUFDO1FBRTVFLElBQUksR0FBRyxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLFVBQUMsRUFBWTtZQUN6QixJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ1YsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFFbEIsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztnQkFDVixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNaLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQztnQkFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQyJ9