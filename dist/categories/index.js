"use strict";
var exceptions_1 = require('../exceptions');
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Categories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2F0ZWdvcmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsMkJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDO0lBQ0Msb0JBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBRWpELENBQUM7SUFFRCx3QkFBRyxHQUFILFVBQUksRUFBVSxFQUFFLFFBQW1CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsRUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLFFBQW1CO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLGdCQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUdELDJCQUFNLEdBQU4sVUFBTyxRQUFtQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLDJCQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0YsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCRDs0QkFxQkMsQ0FBQSJ9