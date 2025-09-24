# Udacity Image Processing API (TypeScript)

This project is a ready-to-run boilerplate for the Udacity Image Processing API project:
- TypeScript + Express
- Image processing with Sharp
- Jasmine tests + Supertest
- ESLint + Prettier config

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in dev mode (requires `ts-node-dev`):
   ```bash
   npm run dev
   ```

3. Build & start (production):
   ```bash
   npm run build
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```


## API Endpoint

The main endpoint for image processing is:

```
GET http://localhost:3000/api/images?filename=<name>&width=<width>&height=<height>
```

**Example:**

```
GET http://localhost:3000/api/images?filename=man&width=200&height=200
```

This endpoint returns a resized image with status 200 if the request is valid.

You can also test the server health with:

```
GET http://localhost:3000/api/images/ping
```

Returns:
```json
{ "message": "pong" }
```

## Notes
Add your `.jpg` source images into `assets/full/` (this ZIP includes placeholder tiny images named `man.jpg`, `mont.jpg`, etc.)
Processed images will be cached into `assets/thumb/` as `<name>_<width>x<height>.jpg`
