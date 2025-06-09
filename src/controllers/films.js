import { writeJsonFile, readJsonFile } from '../utils/utils.js';
import { FILMS_DIR } from '../config.js';
import express from 'express';

export const getFilms = async (req, res, next) => {
    try {
        const data = await readJsonFile(FILMS_DIR);
        res.status(200).json(data);
    } catch (error) {
        next(error); 
    }
}

export const getFilm = async (req, res) => {
    const id = Number(req.params.id);
    const data = await readJsonFile(FILMS_DIR);
    const film = data.find(f => f.id === id);
    res.status(200).json(film);
};

export const createFilm = async (req, res, next) => {
    try {
        const data = await readJsonFile(FILMS_DIR);
        const existingFilm = data.find(f => f.titulo === req.body.titulo);
        if (existingFilm) {
            return res.status(409).send('Ya existe una película con ese título\n');
        }
        const id = data.length + 1;
        const newFilm = { id, ...req.body };
        data.push(newFilm);
        await writeJsonFile(FILMS_DIR, data);
        res.status(201).json(newFilm);
    } catch (error) {
        next(error); 
    }
}


export const updateFilm = async (req, res) => {
    const id = Number(req.params.id);
    const data = await readJsonFile(FILMS_DIR);
    const filmIndex = data.findIndex(f => f.id === id);
    const updatedFilm = { id, ...req.body };
    data[filmIndex] = updatedFilm;
    await writeJsonFile(FILMS_DIR, data);
    res.status(200).json(updatedFilm);
};

export const deleteFilm = async (req, res) => {
    const id = Number(req.params.id);
    const data = await readJsonFile(FILMS_DIR);
    const newFilms = data.filter(f => f.id !== id);
    await writeJsonFile(FILMS_DIR, newFilms);
    res.status(200).send('Película eliminada correctamente\n');
};