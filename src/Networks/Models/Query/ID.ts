import { IQuery } from "../IQuery";

export class ID implements IQuery {
    id: string = "";

    constructor(id: string) {
        this.id = id;
    }

    toObject(): object {
        return {
            id: this.id
        };
    }
}