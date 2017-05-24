namespace Tracker.Implementations.Services{
    export class AuthenticationService implements Interfaces.Services.IAuthenticationService{
        static $inject: string[] = [
            'UserRepository'            
        ];

        constructor(
            private userRepository: Interfaces.Repositories.IUserRepository
        ){

        }

        authenticate(email: string, password: string): angular.IPromise<boolean>{
            const self = this;
            return self.userRepository.authenticate(email, password).then(result => {
                self.token = result;
                return true;
            }).catch(result => {
                return false;
            })
        }

        register(user: Interfaces.Models.IUser): angular.IPromise<boolean>{
            return this.userRepository.post(user);
        }

        token: string;
    }
}