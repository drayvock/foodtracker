namespace Tracker.Interfaces.Services{
    export interface IAuthenticationService{
        authenticate(email: string, password: string) : angular.IPromise<boolean>;
        register(user: Interfaces.Models.IUser): angular.IPromise<boolean>;
        token: string;
    }
}