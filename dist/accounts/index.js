"use strict";
var client_1 = require('../client');
var Accounts = (function () {
    function Accounts() {
    }
    Accounts.get = function (id, callback) {
        return client_1.default.get("accounts/" + id, callback);
    };
    Accounts.getAllByUser = function (userId, callback) {
        return client_1.default.get("users/" + userId + "/accounts", callback);
    };
    Accounts.getAllByInstitution = function (institutionId, callback) {
        return client_1.default.get("institutions/" + institutionId + "/accounts", callback);
    };
    Accounts.getAll = function (callback) {
        if (client_1.default.Me.data) {
            return this.getAllByUser(client_1.default.Me.data.id, callback);
        }
        else {
            throw new Error('PocketSmith: Please init a `me` PocketSmith inistance. Eg: (new PocketSmith(\'token\')).init().then(() => { ... })');
        }
    };
    return Accounts;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBb0JBLENBQUM7SUFuQk8sWUFBRyxHQUFWLFVBQVcsRUFBVSxFQUFFLFFBQW1CO1FBQ3pDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFZLEVBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0scUJBQVksR0FBbkIsVUFBb0IsTUFBYyxFQUFFLFFBQW1CO1FBQ3RELE1BQU0sQ0FBQyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLE1BQU0sY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSw0QkFBbUIsR0FBMUIsVUFBMkIsYUFBcUIsRUFBRSxRQUFtQjtRQUNwRSxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLGFBQWEsY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFYSxlQUFNLEdBQXBCLFVBQXFCLFFBQW1CO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLGdCQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7UUFDdkksQ0FBQztJQUNGLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCRDswQkFvQkMsQ0FBQSJ9