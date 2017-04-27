module Tracker {
    export var app = angular.module('app', []);

    app.controller('MealController', Implementations.Controllers.MealController);

    app.service('MealService', Implementations.Services.MealService);
}