import express from 'express';
import morgan from 'morgan';
import imagesRouter from './routes/images';

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.send(
    `<h2>Image Processing API</h2>
     <p>Use: /api/images?filename=name&width=200&height=200</p>`
  );
});

app.use('/api/images', imagesRouter);

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;
