# Changelog 🚀
npm install
npm run dev # for local dev
npm run build # to test production builds before deploying


## Features

- 💅 A stylish changelog
- ⏳ Timeline view
- 📆 Date switcher
- 🧩 Mosaic mode
- 🏄‍♀️ Smooth transitions
- 🎉 Celebrate your team's achievements with team credits on each post
- ⚙️ Easy-to-use admin panel

 `.env.local` file to setup the environment variables, you can reuse the default variables or change them as you will:

```bash
cp .env.example .env.local
```

Then install dependencies and start the Next.js server:

```bash
# Using yarn
yarn install
yarn dev

# Using npm
npm install
npm run dev
```

## Deploying

You can deploy your blog to any hosting provider that supports Next.js. We recommend [Vercel](https://vercel.com), as it is the easiest way to deploy Next.js apps.

To deploy you'll need to make sure you include the right environment variables. You can find some examples of our environment variables in the [`.env.local.example`](https://github.com/juneHQ/changelog/tree/master/.env.example) file.

## Routes

- `/pages/:pageNumber` - displays paginated articles
- `/` - redirects to `/pages/0`
- `/changelogs/:id` - displays one article

## File structure

```bash

bin             # Scripts
components      # Reusable components
├─ core
├─ mdx-layout.tsx
└─ ...
lib              # Types, theme, utilities, services
pages
├─ changelogs    # MDX articles
├─ page
│  └─ [page].tsx # Paginated articles
├─ _app.tsx
└─ _middleware.ts
...
```

## Writing articles

To write a new blog post, create a new `.mdx` file in the `/pages/changelogs` directory.

### Anatomy of an MDX article

MDX is a superset of markdown that lets you write JSX directly in your markdown files. It is a powerful way to add dynamic interactivity, and embed components within your content, helping you to bring your pages to life.

![mdx-preview](https://github.com/danieljune/changelog/assets/104089773/83a35930-8f4e-4c3d-a077-afcd8251af0b)

Learn more 👉 [Next.js: Using MDX](https://nextjs.org/docs/advanced-features/using-mdx), [Using MDX](https://mdxjs.com/docs/using-mdx/)

## Managing images and assets

If you start having too many changelogs, you'll want to move your images in an S3 bucket.

To do so you'll need to:

1. Create an S3 bucket for your changelog images
2. Add the bucket name to your `.env` file
3. Make sure you are authenticated to your AWS account and have the `aws` CLI installed
4. Create a `changelog-images` directory in your repository (`mkdir changelog-images`)
5. Run `sync_images.sh` to sync the images from your local to your S3 bucket

You'll need to run the `sync_images.sh` script to sync your local images with your S3 bucket. This script will upload all images in the `/changelog-images` directory to your S3 bucket.

```bash
./sync_images.sh
```


Vercel, log in via Github.
Continuously generated from Github