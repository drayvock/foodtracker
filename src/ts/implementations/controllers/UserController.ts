module Tracker.Implementations.Controllers{
    export class UserController{
        static $inject = [
            'UserService'
        ]

        constructor(
            private userService: Interfaces.Services.IUserService
        ){
        }

        get firstName(): string{
            if(this.userService.currentUser){
                return this.userService.currentUser.name.firstName;
            }

            return "";
        }

        isAuthenticated(): boolean{
            return !!this.userService.currentUser;
        }
    }
}