"use strict";
var Request = require('request');
var Promise = require('bluebird');
var Client = (function () {
    function Client() {
    }
    Client.prototype.resource = function (method, url, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Request({
                method: method,
                url: "https://api.pocketsmith.com/v2/" + url,
                headers: {
                    'Authorization': _this.token,
                    'Content-Type': 'application/json'
                }
            }, function (e, req, body) {
                if (e != null) {
                    reject(e);
                }
                else {
                    var returns = void 0;
                    try {
                        returns = JSON.parse(body);
                    }
                    catch (e) {
                        returns = body;
                    }
                    resolve(returns);
                }
            });
        });
    };
    Client.prototype.frame = function (method, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.resource(method, url)
                .then(function (resp) {
                resolve(resp);
            }, function (e) {
                reject(e);
            });
        });
    };
    Client.prototype.get = function (url, callback) {
        var prom = this.frame('GET', url);
        if (callback) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Client();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFcEM7SUFBQTtJQW9EQSxDQUFDO0lBakRRLHlCQUFRLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBYTtRQUEzRCxpQkF5QkM7UUF4QkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsT0FBTyxDQUFDO2dCQUNQLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxvQ0FBa0MsR0FBSztnQkFDNUMsT0FBTyxFQUFFO29CQUNSLGVBQWUsRUFBRSxLQUFJLENBQUMsS0FBSztvQkFDM0IsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbEM7YUFDRCxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLElBQUksT0FBTyxHQUFvQixLQUFLLENBQUMsQ0FBQztvQkFFdEMsSUFBSSxDQUFDO3dCQUNKLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUMzQixDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLHNCQUFLLEdBQWIsVUFBYyxNQUFjLEVBQUUsR0FBVTtRQUF4QyxpQkFTQztRQVJBLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztpQkFDeEIsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsVUFBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUFtQjtRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUFFRDtrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDIn0=