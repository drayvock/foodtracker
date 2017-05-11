module Tracker.Interfaces.Repositories{
    export interface ICrudRepository<T>{
        get(): angular.IPromise<T>;
        post(item: T): angular.IPromise<boolean>;
        put(item: T): angular.IPromise<boolean>;
        delete(item: T): angular.IPromise<boolean>;
    }
}