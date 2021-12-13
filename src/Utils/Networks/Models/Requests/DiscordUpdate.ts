import { DTO } from "../DTO";

export class DiscordUpdate extends DTO {
    id: string = "";
    nickname: string = "";

    constructor(id: string, nickname: string) {
        super();
        this.id = id;
        this.nickname = nickname;
    }
}