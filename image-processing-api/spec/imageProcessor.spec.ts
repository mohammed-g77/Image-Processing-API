import fs from 'fs';
import path from 'path';
import { processImageIfNeeded } from '../src/utilities/imageProcessor';

describe('imageProcessor', () => {
  const source = path.resolve(__dirname, '..', 'assets', 'full', 'encenadaport.jpg');
  const output = path.resolve(__dirname, '..', 'assets', 'thumb', 'encenadaport_10x10.jpg');

  beforeAll(() => {
    if (!fs.existsSync(source)) {
      pending('Source image missing - put assets/full/encenadaport.jpg for this test');
    }
  });

  it('should create resized image', async () => {
    if (fs.existsSync(output)) {
      fs.unlinkSync(output);
    }
    await processImageIfNeeded(source, output, 10, 10);
    expect(fs.existsSync(output)).toBeTrue();
    // cleanup
    fs.unlinkSync(output);
  });
});
