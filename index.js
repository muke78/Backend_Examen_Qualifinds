import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './src/routes/index.js';
import { setupSwagger } from './src/config/swagger.config.js';

const PORT = 3000;
const app = express();

setupSwagger(app);

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));
app.use(router);

app.get('/', (req, res) => {
  res.status(200).json({
    description: 'Challenge Full Stack Developer',
    name: 'Backend API RESTFULL Pokemones',
    version: '0.0.0',
    authorName: 'Erick Gonzalez',
    githubName: 'https://github.com/muke78',
    companyName: 'https://qualifinds.com/',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
