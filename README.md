# Hello World with Typescript, React, Webpack, Netlify, Storybook, Jest

[![Netlify Status](https://api.netlify.com/api/v1/badges/d91103dc-4343-49e0-90b1-529c91fdb6d4/deploy-status)](https://app.netlify.com/sites/typescriptreacthelloworld/deploys)

[View the live site](https://typescriptreacthelloworld.netlify.app/)

---

# Tutorial

1. Install yarn (or npm but I use yarn)

```
yarn
```

This will create a yarn.lock file.

2. Add typescript

```
yarn add -D typescript @types/node @types/react @types/react-dom
```

3. Create the tsconfig.json

```ts
{
  "compilerOptions": {
    "jsx": "react",
    "module": "es6",
    "allowSyntheticDefaultImports": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
  }
```

4. Add react and react-dom

```
yarn add react react-dom
```

4. Add webpack and the ts-loader

```
yarn add -D webpack webpack-cli ts-loader
```

5. Run webpack

You can also run `yarn start` which simply maps to this command.

```
npx webpack
```