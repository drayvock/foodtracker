module Tracker.Interfaces.Services{
    export interface IUserService {
        readonly currentUser: Models.IUser;
        addMeal(meal: Models.IMeal): void;
    }
}