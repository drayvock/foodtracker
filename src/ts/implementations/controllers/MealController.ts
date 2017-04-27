module Tracker.Implementations.Controllers{
    export class MealController{
        static $inject = [
            'MealService'
        ]

        constructor(
            private mealService: Interfaces.Services.IMealService
        ){
        }

        get meals(): Interfaces.Models.IMeal[]{
            return this.mealService.collection;
        }

        newMeal: Interfaces.Models.IMeal;

        saveMeal(): void{
            this.mealService.save(this.newMeal);
            this.showNew = false;
        }

        showNew: boolean = false;

        get showNoMeals(): boolean {
            return this.meals.length === 0 && !this.showNew;
        }

        startMeal(): void{
            this.newMeal = {                    
                Time: new Date(),
                Food: "",
                Notes: "",
                Pain: 0
            }

            this.showNew = true;
        }
    }
}