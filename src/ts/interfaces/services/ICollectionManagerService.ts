module Tracker.Interfaces.Services {
    export interface ICollectionManagerService<T> {
        add(item: T): void;
        delete(item: T): void;
        deleteById(id: string): void;
        exists(item: T): boolean;
        existsById(id: string): boolean;
        fetch(id: string) : angular.IPromise<T[]>;
        getById(id: string): T;
        save(item: T): void;
        update(item: T): void;
    }

    export interface ICollectionService<T> extends ICollectionManagerService<T> {
        collection: T[];
    }
}