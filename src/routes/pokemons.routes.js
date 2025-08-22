import { Router } from 'express';
import {
  GetAllPokemons,
  GetPokemonsById,
  InsertPokemons,
  UpdatedAllPokemons,
  UpdatedUniquePokemon,
  DeletePokemons,
} from '../controllers/pokemons.controllers.js';

const apiPokemons = Router();


// GET: get_all_pokemons
apiPokemons.get('/', GetAllPokemons);

// GET: get_all_pokemons_by_id
apiPokemons.get('/:id', GetPokemonsById);

// POST insert_new_pokemon
apiPokemons.post('/', InsertPokemons);

// PUT updated_all_data_pokemon
apiPokemons.put('/:id', UpdatedAllPokemons);

// PATCH updated_unique_data_pokemon
apiPokemons.patch('/:id', UpdatedUniquePokemon);

// DELETE delete_pokemon
apiPokemons.delete('/:id', DeletePokemons);

export { apiPokemons };
