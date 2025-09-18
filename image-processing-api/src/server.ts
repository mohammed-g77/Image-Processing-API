import express, { Application, Request, Response } from 'express';
 
import imagesRouter from './routes/images';

const app: Application = express();
const port = 3000;

app.use('/api/images', imagesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;