module Tracker.Interfaces.Repositories{
    export interface IUserRepository extends ICrudRepository<Models.IUser>{
        addMeal(user: Interfaces.Models.IUser, meal: Interfaces.Models.IMeal): angular.IPromise<boolean>;        
        removeMeal(user: Interfaces.Models.IUser, meal: Interfaces.Models.IMeal): angular.IPromise<boolean>;
    }
}