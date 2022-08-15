# Xobotics-web

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ export NODE_OPTIONS=--openssl-legacy-provider # If error
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# compile tailwind
$ npx tailwindcss -i ./src/css/input.css -o ./static/css/tailwind.css --watch

# generate static project
$ npm run generate
```