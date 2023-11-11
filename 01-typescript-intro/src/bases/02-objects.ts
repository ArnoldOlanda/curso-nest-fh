export const pokemonIds = [1, 20, 30, 40, 54, 23];

//! pokemonIds.push("cadena"); //Esto da error

// console.log(pokemonIds);

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const pokemon: Pokemon = {
    id: 1,
    name: "Pikachu",
    age: 23,
};

export const pokemons: Pokemon[] = [];

pokemons.push(pokemon);
