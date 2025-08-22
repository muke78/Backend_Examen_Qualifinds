import { promises as fs } from 'node:fs';

const POKEMONS_FILE = 'db.json';

export const loadPokemons = async () => {
  const data = await fs.readFile(POKEMONS_FILE, 'utf-8');
  return JSON.parse(data);
};

export const savePokemons = async (pokemons) => {
  await fs.writeFile(POKEMONS_FILE, JSON.stringify(pokemons, null, 2));
};