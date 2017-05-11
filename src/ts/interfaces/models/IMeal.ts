module Tracker.Interfaces.Models{
    export interface IMeal extends IIdentified{
        time: Date;
        food: string;
        notes: string;
        pain: Number;
    }
}