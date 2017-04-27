module Tracker.Implementations.Services{
    export class MealService implements Interfaces.Services.IMealService {
        static $inject = [
            '$q'
        ];

        constructor(
            private $q: angular.IQService
        ){
            this.collection = [];
        }

        private randomIntFromInterval(min: number, max: number)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        add(item: Interfaces.Models.IMeal): void {
            this.collection.push(item);
        }

        _collection: Interfaces.Models.IMeal[];

        get collection(): Interfaces.Models.IMeal[]{
            return this._collection;
        }

        set collection(value: Interfaces.Models.IMeal[]){
            this._collection = value;
        }

        delete(item: Interfaces.Models.IMeal): void {

        }

        deleteById(id: string): void {

        }

        exists(item: Interfaces.Models.IMeal): boolean {
            return false;
        }

        existsById(id: string): boolean {
            return false;
        }

        fetch(id: string): angular.IPromise<Interfaces.Models.IMeal[]> {
            var meals = [] as Interfaces.Models.IMeal[];
            var deferred = this.$q.defer();
            deferred.resolve(meals);
            return deferred.promise;
        }

        getById(id: string): Interfaces.Models.IMeal {
            return {} as Interfaces.Models.IMeal;
        }

        save(item: Interfaces.Models.IMeal): void {
            this.exists(item) ? this.update(item): this.add(item);
        }

        update(item: Interfaces.Models.IMeal): void {

        }
    }
}