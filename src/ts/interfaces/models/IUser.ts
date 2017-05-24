module Tracker.Interfaces.Models{
    export interface IUser extends IIdentified{
        password: string;
        name: IName;
        meals: IMeal[],
        email: string;
    }
}