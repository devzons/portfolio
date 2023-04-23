# Portfolio with React, Tailwind, Framer-Motion

## Dependecies

`npm i framer-motion react-anchor-link-smooth-scroll react-hook-form`

## tailwind CSS

`npm i -D tailwindcss`

`npx tailwindcss -i ./src/index.css -o ./public/output.css --watch`

- add index.html

```html
<link rel="stylesheet" href="/public/output.css" />
```

- index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#root,
.app {
  height: 100%;
  background-color: #010026;
  @apply text-white;
}
```

## vscode modules

- Tailwind CSS IntelliSense by Tailwind Labs
- Tailwind Documentation by alfredbrik

## Form submit

[FormSubmit](https://formsubmit.co/documentation)

- test with real email

### Live Site

[portfolio.dimshift.com](https://portfolio.dimshift.com)
