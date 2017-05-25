module Tracker.Implementations.Controllers{
    export class MealController{
        static $inject = [
            '$location',
            'AuthenticationService',
            'UserService'
        ]

        constructor(
            private $location: angular.ILocationService,
            private authenticationService: Interfaces.Services.IAuthenticationService,
            private userService: Interfaces.Services.IUserService
        ){
        }

        get meals(): Interfaces.Models.IMeal[]{
            if(this.userService.currentUser){
                return this.userService.currentUser.meals;
            }

            return [];
        }

        newMeal: Interfaces.Models.IMeal;

        saveMeal(): void{
            this.userService.addMeal(this.newMeal);
            this.showNew = false;
        }

        showNew: boolean = false;

        get showNoMeals(): boolean {
            return this.meals.length === 0 && !this.showNew;
        }

        startMeal(): void{
            this.resetNewMeal();
            this.showNew = true;
        }

        cancelMeal(): void{
            this.resetNewMeal();
            this.showNew = false;
        }

        private resetNewMeal(){
            this.newMeal = {      
                _id: "",              
                time: new Date(),
                food: "",
                notes: "",
                pain: 0
            }
        }
    }
}