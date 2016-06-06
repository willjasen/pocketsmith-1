"use strict";
var Promise = require('bluebird');
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.prototype.getAll = function (id, callback) {
        var prom = new Promise(function (resolve, reject) {
            client_1.default.get("users/" + id + "/accounts")
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
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLElBQVksT0FBTyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3BDLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBb0JBLENBQUM7SUFsQkEseUJBQU0sR0FBTixVQUFPLEVBQVUsRUFBRSxRQUFtQjtRQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3RDLGdCQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsRUFBRSxjQUFXLENBQUM7aUJBQ2hDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLFVBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBRUQ7a0JBQWUsUUFBUSxDQUFDIn0=