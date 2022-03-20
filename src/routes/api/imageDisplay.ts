import express from 'express';
import imageController from '../../controllers/imageController';

const image: express.Router = express.Router();

image.use('/', imageController.display);

export default image;
