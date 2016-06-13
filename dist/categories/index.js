"use strict";
var client_1 = require('../client');
var Categories = (function () {
    function Categories() {
    }
    Categories.get = function (id, callback) {
        return client_1.default.get("categories/" + id, callback);
    };
    Categories.getAllByUser = function (userId, callback) {
        return client_1.default.get("users/" + userId + "/categories", callback);
    };
    return Categories;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Categories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2F0ZWdvcmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsdUJBQW1CLFdBQVcsQ0FBQyxDQUFBO0FBRS9CO0lBQUE7SUFRQSxDQUFDO0lBUE8sY0FBRyxHQUFWLFVBQVcsRUFBVSxFQUFFLFFBQW1CO1FBQ3pDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLHVCQUFZLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxRQUFtQjtRQUN0RCxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLGdCQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSRDs0QkFRQyxDQUFBIn0=