module Tracker {
    export var app = angular.module('app', [
        'restangular'
    ]);

    app.service('UserRepository', Implementations.Repositories.UserRepository);

    app.service("UserService", Implementations.Services.UserService);
    
    app.controller('MealController', Implementations.Controllers.MealController);
    app.controller('UserController', Implementations.Controllers.UserController);

    app.run(Tracker.Main);
}