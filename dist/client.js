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
                    'Authorization': (function (t) {
                        return (/Key/.test(t)) ? t : "Key " + t;
                    })(_this.token),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFcEM7SUFBQTtJQW1DQSxDQUFDO0lBaENRLHlCQUFRLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBYTtRQUEzRCxpQkEyQkM7UUExQkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsT0FBTyxDQUFDO2dCQUNQLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxvQ0FBa0MsR0FBSztnQkFDNUMsT0FBTyxFQUFFO29CQUNSLGVBQWUsRUFBRSxDQUFDLFVBQUMsQ0FBUzt3QkFDM0IsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFPLENBQUcsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztvQkFDZCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNsQzthQUNELEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsSUFBSSxPQUFPLEdBQW9CLEtBQUssQ0FBQyxDQUFDO29CQUV0QyxJQUFJLENBQUM7d0JBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQzNCLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEdBQVc7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBRUQ7a0JBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQyJ9