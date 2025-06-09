import express from 'express';
import router from './routes/routes.js';
import dotenv from 'dotenv';
import { loggerMiddleware } from './middleware/middleware.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use('/films', router);

app.listen(process.env.PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${process.env.PORT}`);
})
.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
