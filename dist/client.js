"use strict";
var Got = require('got');
var Promise = require('bluebird');
var Client = (function () {
    function Client(token) {
        this.token = token;
    }
    Client.prototype.resource = function (method, url, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Got("https://api.pocketsmith.com/v2/" + url, {
                method: method,
                json: true,
                retries: 0,
                query: payload || void 0,
                headers: {
                    'Authorization': _this.token,
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                resolve(response.body);
            }, function (err) {
                reject(err);
            });
        });
    };
    Client.prototype.get = function (url, callback, payload) {
        var prom = this.resource('GET', url, payload);
        if (!(callback === void 0)) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxHQUFHLFdBQU0sS0FBSyxDQUFDLENBQUE7QUFDM0IsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFcEM7SUFDQyxnQkFBb0IsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBSSxDQUFDO0lBRTlCLHlCQUFRLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBYTtRQUEzRCxpQkFrQkM7UUFqQkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsR0FBRyxDQUFDLG9DQUFrQyxHQUFLLEVBQUU7Z0JBQzVDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1IsZUFBZSxFQUFFLEtBQUksQ0FBQyxLQUFLO29CQUMzQixjQUFjLEVBQUUsa0JBQWtCO2lCQUNsQzthQUNELENBQUM7aUJBQ0EsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDYixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFBRSxVQUFBLEdBQUc7Z0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQW1CLEVBQUUsT0FBYTtRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQUVEO2tCQUFlLE1BQU0sQ0FBQyJ9