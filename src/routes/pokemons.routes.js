import { Router } from 'express';
import { 
  GetAllPokemons,
  GetPokemonsById,
  InsertPokemons,
  UpdatedAllPokemons,
  UpdatedUniquePokemon,
  DeletePokemons
} from '../controllers/pokemons.controllers.js';

const apiPokemons = Router();

apiPokemons.get('/', GetAllPokemons);
apiPokemons.get('/:id', GetPokemonsById);
apiPokemons.post('/', InsertPokemons);
apiPokemons.put('/:id', UpdatedAllPokemons);
apiPokemons.patch('/:id', UpdatedUniquePokemon);
apiPokemons.delete('/:id', DeletePokemons);

export { apiPokemons };
