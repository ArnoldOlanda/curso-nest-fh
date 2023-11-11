export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string) {}
}

export const charmander = new Pokemon(1, "nombre");

console.log(charmander.imageUrl);
