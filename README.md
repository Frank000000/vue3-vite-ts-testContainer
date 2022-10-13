# Vue 3 + Typescript + Vite

![alt](./src/assets/1.png)

## update dependent packages

1. npm install -g npm-check-updates
2. ncu
3. ncu -u
4. npm i

## publish components application to npm

```bash
# if "vue-tsc" > "^0.40.4" , "build": "vue-tsc --noEmit && vite build" -> "build": "vite build"
pnpm run build
npm login
npm publish --access public
```