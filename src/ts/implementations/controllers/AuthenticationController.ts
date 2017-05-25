module Tracker.Implementations.Controllers{
    export class AuthenticationController{
        static $inject = [
            '$location',
            'AuthenticationService',
            'UserService'
        ];

        constructor(
            private $location: angular.ILocationService,
            private authenticationService : Interfaces.Services.IAuthenticationService,
            private userService: Interfaces.Services.IUserService
        ){
            // TODO: This should be in a factory.
            this.user = {
                _id: '',
                password: '',
                email: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                meals: []
            }
        }

        user: Interfaces.Models.IUser;
        error: string;
        isSigningUp: boolean = false;

        signIn(){
            this.authenticationService.authenticate(this.user.email, this.user.password).then(result => {
                if(result){
                    this.userService.currentUser = result;
                    this.$location.path('/meals');
                } else {
                    this.error = 'Invalid email address and password combination';
                }
            });
        }

        signUp(){
            this.isSigningUp = true;
        }

        register(){
            this.authenticationService.register(this.user).then(() => {
                this.signIn();
            })

        }
    }
}