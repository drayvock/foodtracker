module Tracker.Interfaces.Models{
    export interface IUser extends IIdentified{
        username: string;
        name: IName;
        meals: IMeal[]
    }
}