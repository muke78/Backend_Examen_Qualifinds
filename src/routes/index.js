import { Router } from 'express';
import { apiPokemons } from './pokemons.routes.js';

const router = Router();

router.use('/api/qualifinds/pokemons', apiPokemons);

export default router;
