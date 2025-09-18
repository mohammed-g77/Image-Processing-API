import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { processImageIfNeeded } from '../utilities/imageProcessor';

const router = express.Router();

const fullDir = path.resolve(__dirname, '..', '..', 'assets', 'full');
const thumbDir = path.resolve(__dirname, '..', '..', 'assets', 'thumb');

router.get('/', async (req: Request, res: Response) => {
router.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});
  const filename = String(req.query.filename || '');
  const width = parseInt(String(req.query.width || ''));
  const height = parseInt(String(req.query.height || ''));

  if (!filename) {
    return res.status(400).json({ error: 'filename is required' });
  }
  if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
    return res.status(400).json({ error: 'width and height must be positive integers' });
  }

  const sourcePath = path.join(fullDir, `${filename}.jpg`);
  if (!fs.existsSync(sourcePath)) {
    return res.status(404).json({ error: `Source image ${filename}.jpg not found` });
  }

  const outName = `${filename}_${width}x${height}.jpg`;
  const outPath = path.join(thumbDir, outName);

  try {
    await processImageIfNeeded(sourcePath, outPath, width, height);
    return res.sendFile(outPath);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error processing image' });
  }
});

export default router;
