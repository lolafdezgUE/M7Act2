import Joi from 'joi';

export const filmSchema = Joi.object({
  titulo: Joi.string().min(3).required(),
  descripcion: Joi.string().optional(),
  fecha_estreno: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(),
  director: Joi.string().required()
});