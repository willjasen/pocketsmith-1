"use strict";
var accounts_1 = require('./accounts');
var categories_1 = require('./categories');
var client_1 = require('./client');
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.token = (function (t) {
            return (/^Key|Bearer/i.test(t)) ? t : "Key " + t;
        })(this.token);
        client_1.default.token = this.token;
        this.Accounts = accounts_1.default;
        this.Categories = categories_1.default;
    }
    return PocketSmith;
}());
module.exports = PocketSmith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFxQixZQUFZLENBQUMsQ0FBQTtBQUNsQywyQkFBdUIsY0FBYyxDQUFDLENBQUE7QUFFdEMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBRTlCO0lBS0MscUJBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFDLENBQVM7WUFDdkIsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFPLENBQUcsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFZixnQkFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFVLENBQUM7SUFDOUIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFFRCxpQkFBUyxXQUFXLENBQUMifQ==