export class Player {
    name: string;
    score: number = 0;

    constructor(name: string, score: number) {
        this.name = name
        this.score = score
    }
}