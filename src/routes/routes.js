import express from 'express';
import { getFilms, getFilm, createFilm, updateFilm, deleteFilm } from '../controllers/films.js';
import { validateFilm, idValidation, filmExists } from '../middleware/middleware.js';

const router = express.Router();

router.get('/', getFilms);

router.get('/:id', [idValidation, filmExists], getFilm);

router.post('/', [validateFilm], createFilm);

router.put('/:id', [idValidation, filmExists, validateFilm], updateFilm);

router.delete('/:id', [idValidation, filmExists], deleteFilm);

export default router;