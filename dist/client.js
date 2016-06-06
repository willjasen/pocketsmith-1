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
    Client.prototype.get = function (url) {
        return this.resource('GET', url);
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Client();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFcEM7SUFBQTtJQWlDQSxDQUFDO0lBOUJRLHlCQUFRLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBYTtRQUEzRCxpQkF5QkM7UUF4QkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsT0FBTyxDQUFDO2dCQUNQLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxvQ0FBa0MsR0FBSztnQkFDNUMsT0FBTyxFQUFFO29CQUNSLGVBQWUsRUFBRSxLQUFJLENBQUMsS0FBSztvQkFDM0IsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbEM7YUFDRCxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLElBQUksT0FBTyxHQUFvQixLQUFLLENBQUMsQ0FBQztvQkFFdEMsSUFBSSxDQUFDO3dCQUNKLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUMzQixDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG9CQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQUVEO2tCQUFlLElBQUksTUFBTSxFQUFFLENBQUMifQ==