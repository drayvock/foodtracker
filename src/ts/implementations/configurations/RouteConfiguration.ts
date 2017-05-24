namespace Tracker.Implementations.Configurations{
    export class RouteProvider {
        constructor(
            private $routeProvider: angular.route.IRouteProvider
        ){
            this.$routeProvider
            .when(
                '/',{
                    templateUrl: '/app/templates/signin.html'
                }
            )
            .when(
                '/meals', {
                    templateUrl: '/app/templates/meals.html',
                    
                }
            )
        }
        
    }


    routeProvider.$inject = ['$routeProvider'];
    export function routeProvider($routeProvider: angular.route.IRouteProvider){
        return new RouteProvider($routeProvider);
    }
}