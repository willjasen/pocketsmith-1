"use strict";
var Promise = require('bluebird');
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transactions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUdwQztJQUNDLHNCQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUVqRCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEtBQTBCLEVBQUUsTUFBZSxFQUFFLFFBQW1CO1FBQXZFLGlCQTRCQztRQTNCQSxJQUFJLElBQUksR0FBVyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxHQUFHLEdBQVcsWUFBUyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQWUsQ0FBQztRQUU1RSxJQUFJLEdBQUcsR0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRSxJQUFJLE1BQU0sR0FBRyxVQUFDLEVBQVk7WUFDekIsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNWLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWxCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Z0JBQ1YsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDWixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ0Q7OEJBa0NDLENBQUEifQ==