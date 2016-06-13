"use strict";
var Request = require('request');
var Promise = require('bluebird');
var Client = (function () {
    function Client() {
        this.Me = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxPQUFPLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFcEM7SUFBQTtRQUVRLE9BQUUsR0FBZ0IsS0FBSyxDQUFDLENBQUM7SUFtRGpDLENBQUM7SUFqRFEseUJBQVEsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLEdBQVcsRUFBRSxPQUFhO1FBQTNELGlCQXlCQztRQXhCQSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxPQUFPLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRyxFQUFFLG9DQUFrQyxHQUFLO2dCQUM1QyxPQUFPLEVBQUU7b0JBQ1IsZUFBZSxFQUFFLEtBQUksQ0FBQyxLQUFLO29CQUMzQixjQUFjLEVBQUUsa0JBQWtCO2lCQUNsQzthQUNELEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsSUFBSSxPQUFPLEdBQW9CLEtBQUssQ0FBQyxDQUFDO29CQUV0QyxJQUFJLENBQUM7d0JBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQzNCLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sc0JBQUssR0FBYixVQUFjLE1BQWMsRUFBRSxHQUFVO1FBQXhDLGlCQVNDO1FBUkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO2lCQUN4QixJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxVQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQW1CO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQUVEO2tCQUFlLElBQUksTUFBTSxFQUFFLENBQUMifQ==