import morgan from 'morgan';
import { filmSchema } from '../schemas/schemas.js';
import { readJsonFile } from '../utils/utils.js';
import { FILMS_DIR } from '../config.js';

export const loggerMiddleware = morgan('dev');

export const validateFilm = (req, res, next) => {
  const { error } = filmSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const idValidation = (req, res, next) => {
  const id = req.params.id;
  if (!id || typeof id !== 'string' || id.trim() === '') {
    return res.status(400).json({ error: 'ID inválido' });
  }
  next();
};

export const filmExists = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = await readJsonFile(FILMS_DIR);
    const film = data.find(f => f.id === id);
    if (!film) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    next();
  } catch (error) {
    console.error(`Error al verificar la existencia de la película: ${error.message}`);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const errorHandler = (err, req, res, next) => {
  console.error('Error general:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor'
  });
};

