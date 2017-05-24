module Tracker.Implementations.Controllers{
    export class AuthenticationController{
        static $inject = [
            '$location',
            'AuthenticationService'
        ];

        constructor(
            private $location: angular.ILocationService,
            private authenticationService : Interfaces.Services.IAuthenticationService
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
            console.log('Registering');
            this.authenticationService.register(this.user).then(() => {
                this.signIn();
            })

        }
    }
}