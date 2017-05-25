module Tracker.Implementations.Services{
    export class UserService implements Interfaces.Services.IUserService{
        static $inject: string[] = [
            'UserRepository'            
        ]

        constructor(
            private userRepository: Interfaces.Repositories.IUserRepository
        ){
        }

        private _currentUser: Interfaces.Models.IUser;
        private _fetchingCurrentUser: boolean = false;

        get currentUser(): Interfaces.Models.IUser{
            if(this._currentUser) {
                return this._currentUser;
            }

            this.fetchCurrentUser();
            return undefined;
        } 

        set currentUser(value: Interfaces.Models.IUser){
            this._currentUser = value;
        }

        addMeal(meal: Interfaces.Models.IMeal): void{
            var mealIndex = this._currentUser.meals.indexOf(meal);
            if(mealIndex === -1){
                this.userRepository.addMeal(this.currentUser, meal);
                this._currentUser.meals.push(meal);
            }
        }

        removeMeal(meal: Interfaces.Models.IMeal): void{
            var mealIndex = this._currentUser.meals.indexOf(meal);
            if(mealIndex > -1){
                this.userRepository.removeMeal(this.currentUser, meal);
                this._currentUser.meals.splice(mealIndex);
            }
        }

        fetchCurrentUser(){
            if(!this._fetchingCurrentUser){
                this._fetchingCurrentUser = true;
                this.userRepository.get().then(user => {
                    this._currentUser = user;
                    this._fetchingCurrentUser = false;
                })
            }
        }

    }
}