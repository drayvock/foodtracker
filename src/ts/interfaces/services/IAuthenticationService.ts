namespace Tracker.Interfaces.Services{
    export interface IAuthenticationService{
        authenticate(email: string, password: string) : angular.IPromise<Interfaces.Models.IUser>;
        register(user: Interfaces.Models.IUser): angular.IPromise<boolean>;
        token: string;
    }
}