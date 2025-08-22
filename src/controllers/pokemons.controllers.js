import {
  loadPokemons,
  savePokemons,
} from '../middleware/savePokemons.middleware.js';

let pokemons = await loadPokemons();

// GET: get_all_pokemons
export const GetAllPokemons = async (req, res) => {
  res.status(200).json(pokemons);
};

// GET: get_all_pokemons_by_id
export const GetPokemonsById = async (req, res) => {
  const { id } = req.params;

  const pokemon = pokemons.find((p) => p.id === parseInt(id));

  if (!pokemon) return res.status(404).json({ message: 'Pokemon not found' });

  res.json(pokemon);
};

// POST insert_new_pokemon
export const InsertPokemons = async (req, res) => {
  const { id, name, type, hp, attack, defense } = req.body;

  if (!id || !name || !type || !hp || !attack || !defense) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newPokemon = {
    id,
    name,
    type,
    hp,
    attack,
    defense,
  };

  pokemons.push(newPokemon);
  await savePokemons(pokemons);

  res.status(201).json(newPokemon);
};

// PUT updated_all_data_pokemon
export const UpdatedAllPokemons = async (req, res) => {
  const { id } = req.params;

  const index = pokemons.findIndex((p) => p.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ message: 'Pokemon not found' });

  pokemons[index] = { ...req.body, id: parseInt(id) };
  res.json(pokemons[index]);

  await savePokemons(pokemons);
};

// PATCH updated_unique_data_pokemon
export const UpdatedUniquePokemon = async (req, res) => {
  const { id } = req.params;

  const pokemon = pokemons.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return res.status(404).json({ message: 'Pokemon not found' });
  }

  Object.assign(pokemon, req.body);
  res.json(pokemon);

  await savePokemons(pokemons);
};

// DELETE delete_pokemon
export const DeletePokemons = async (req, res) => {
  const { id } = req.params;

  const index = pokemons.findIndex((p) => p.id === parseInt(id));

  console.log(index);

  if (index === -1) {
    return res.status(404).json({ message: 'Pokemon not found' });
  }

  const [deleted] = pokemons.splice(index, 1);

  await savePokemons(pokemons);

  res.json(deleted);
};
