"use strict";
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
    return Categories;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Categories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2F0ZWdvcmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFDQyxvQkFBb0IsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFFaEQsQ0FBQztJQUVELHdCQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBbUI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsUUFBbUI7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLE1BQU0sZ0JBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpEOzRCQVlDLENBQUEifQ==