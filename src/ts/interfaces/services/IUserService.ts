module Tracker.Interfaces.Services{
    export interface IUserService {
        currentUser: Models.IUser;
        addMeal(meal: Models.IMeal): void;
        fetchCurrentUser(): void;
    }
}