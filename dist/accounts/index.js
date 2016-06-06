"use strict";
var Promise = require('bluebird');
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.prototype.frame = function (url, callback) {
        var prom = new Promise(function (resolve, reject) {
            client_1.default.get(url)
                .then(function (resp) {
                resolve(resp);
            }, function (e) {
                reject(e);
            });
        });
        if (callback) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    Accounts.prototype.getAll = function (id, callback) {
        return this.frame("users/" + id + "/accounts", callback);
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLElBQVksT0FBTyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3BDLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBd0JBLENBQUM7SUF0QlEsd0JBQUssR0FBYixVQUFjLEdBQVcsRUFBRSxRQUFrQjtRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3RDLGdCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDYixJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxVQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLFFBQW1CO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVMsRUFBRSxjQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBRUQ7a0JBQWUsUUFBUSxDQUFDIn0=