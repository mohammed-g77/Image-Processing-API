import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export async function processImageIfNeeded(
  sourcePath: string,
  outputPath: string,
  width: number,
  height: number
): Promise<void> {
  // cache hit
  if (fs.existsSync(outputPath)) {
    return;
  }

  // ensure dir
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // sharp processing (async)
  await sharp(sourcePath).resize(width, height).toFormat('jpeg').toFile(outputPath);
}
