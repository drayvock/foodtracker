module Tracker.Implementations.Repositories{
    export class UserRepository implements Interfaces.Repositories.IUserRepository{
        static $inject: string[] = [
            'Restangular'
        ];

        constructor(
            private restangular: Restangular.IService
        ){
            this._service = restangular.service('users');
        }

        private _service: Restangular.IService;

        get(): angular.IPromise<Interfaces.Models.IUser>{
            return this._service.one('me').get().then(result => {
                return result.plain();
            });
        }

        post(item: Interfaces.Models.IUser): angular.IPromise<boolean>{
            // defined here: https://github.com/MattLong87/foodtracker-api
            var postObject: any = {
                password: item.password,
                firstName: item.name.firstName,
                lastName: item.name.lastName,
                email: item.email
            }

            return this._service.one('').customPOST(postObject).then(() => {
                return true 
            });
        }

        put(item: Interfaces.Models.IUser): angular.IPromise<boolean>{
            throw "NotImplementedException";
        }

        delete(item: Interfaces.Models.IUser): angular.IPromise<boolean>{
            throw "NotImplementedException";
        }

        addMeal(user: Interfaces.Models.IUser, meal: Interfaces.Models.IMeal): angular.IPromise<boolean>{
            // defined here: https://github.com/MattLong87/foodtracker-api
            var postObject: any = {
                email: user.email,
                time: meal.time,
                food: meal.food,
                notes: meal.notes,
                pain: meal.pain
            }

            return this._service.one('me').one('add-meal').customPOST(postObject).then(() => {
                return true;
            })
        }

        removeMeal(user: Interfaces.Models.IUser, meal: Interfaces.Models.IMeal): angular.IPromise<boolean>{
            // defined here: https://github.com/MattLong87/foodtracker-api
            var deleteObject: any = {
                email: user.email,
                mealId: meal._id
            }

            return this._service.one('me').one('meals').customDELETE('', deleteObject).then(() => {
                return true;
            })
        }

        authenticate(email: string, password: string): angular.IPromise<string>{
            // defined here: https://github.com/MattLong87/foodtracker-api
            var postObject: any = {
                email: email,
                password: password
            }

            return this.restangular.service('login').one('').customPOST(postObject).then((result) => {
                return result.plain();
            });
        }
    }
}