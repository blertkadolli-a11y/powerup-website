# Power Up | Trajnim Personal në Prizren

Single-page website for **Power Up** – local personal trainer brand in Prizren, Albania.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Replace Trainer Photo

**Replace `/public/trainer-hero.jpg` with Oktaj's photo when ready.**

The hero section is designed so that when you swap the image, it will look perfect without changing the layout. Simply overwrite the file at `public/trainer-hero.jpg` with the actual trainer photo.

## Configuration

Edit `lib/constants.ts` to update:

- `instagramUrl` – Instagram profile URL
- `mapEmbedUrl` – Google Maps embed URL for Lets Go Gym

## Placeholder Images

The following placeholder images are in `/public`:

| File | Purpose |
|------|---------|
| `trainer-hero.jpg` | Hero section (reserved for Oktaj) |
| `figure-1.jpg` | Contact section background |
| `figure-2.jpg` | "Për kë është" section banner |
| `figure-3.jpg` | Services section background |
| `smoke-overlay.png` | Smoke texture overlay |

Replace these with real photos when available.

## Instagram Gallery

**Put your IG poster images in `/public/ig/` as `1.jpg` through `6.jpg`.**

Run `node scripts/create-placeholders.js` to create the `ig/` folder and minimal placeholders. Then replace `1.jpg`–`6.jpg` with your actual Instagram post thumbnails.
# powerup-website
