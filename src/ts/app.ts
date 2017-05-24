module Tracker {
    export var app = angular.module('app', [
        'ngRoute',
        'restangular'
    ]);

    app.service('UserRepository', Implementations.Repositories.UserRepository);

    app.service("AuthenticationService", Implementations.Services.AuthenticationService);
    app.service("UserService", Implementations.Services.UserService);
    
    app.controller('AuthenticationController', Implementations.Controllers.AuthenticationController);
    app.controller('MealController', Implementations.Controllers.MealController);
    app.controller('UserController', Implementations.Controllers.UserController);

    app.config(Implementations.Configurations.routeProvider);

    app.run(Tracker.Main);
}