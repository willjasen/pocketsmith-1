"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var Categories = (function () {
    function Categories(context) {
        this.context = context;
    }
    Categories.prototype.get = function (id, callback) {
        return this.context.Client.get("categories/" + id, callback);
    };
    Categories.prototype.getAllByUser = function (userId, callback) {
        return this.context.Client.get("users/" + userId + "/categories", callback);
    };
    Categories.prototype.getAll = function (callback) {
        if (this.context.Me) {
            return this.getAllByUser(this.context.Me.data.id, callback);
        }
        else {
            throw exceptions_1.NotInMeContext();
        }
    };
    return Categories;
}());
exports.default = Categories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2F0ZWdvcmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDRDQUE2QztBQUU3QztJQUNDLG9CQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUVqRCxDQUFDO0lBRUQsd0JBQUcsR0FBSCxVQUFJLEVBQVUsRUFBRSxRQUFtQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFjLEVBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxRQUFtQjtRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsTUFBTSxnQkFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFHRCwyQkFBTSxHQUFOLFVBQU8sUUFBbUI7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSwyQkFBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNGLENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMifQ==