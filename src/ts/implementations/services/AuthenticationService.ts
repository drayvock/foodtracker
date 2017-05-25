module Tracker.Implementations.Services{
    export class AuthenticationService implements Interfaces.Services.IAuthenticationService{
        static $inject: string[] = [
            'Restangular',
            'UserRepository'            
        ];

        constructor(
            private restangular: Restangular.IService,
            private userRepository: Interfaces.Repositories.IUserRepository
        ){

        }

        authenticate(email: string, password: string): angular.IPromise<Interfaces.Models.IUser>{
            const self = this;
            return self.userRepository.authenticate(email, password).then((result: any) => {
                self.restangular.setDefaultHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Accept, X-Requested-With',
                'Authorization': 'Bearer ' + result.token
            });
                window.localStorage.setItem("token", result.token);

                self.token = result.token;
                return result;
            }).catch(result => {
                return result;
            })
        }

        register(user: Interfaces.Models.IUser): angular.IPromise<boolean>{
            return this.userRepository.post(user);
        }

        token: string;
    }
}