import request from 'supertest';
import app from '../src/server';

describe('GET /api/images', () => {
  it('should return 400 when filename missing', async () => {
    const res = await request(app).get('/api/images').query({ width: 100, height: 100 });
    expect(res.status).toBe(400);
  });

  it('should return 404 when source image not found', async () => {
    const res = await request(app)
      .get('/api/images')
      .query({ filename: 'nonexistent', width: 100, height: 100 });
    expect(res.status).toBe(404);
  });

  it('should return 200 and an image when valid request', async () => {
    const res = await request(app)
      .get('/api/images')
      .query({ filename: 'encenadaport', width: 150, height: 150 });
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBeTruthy();
  }, 10000);
});
