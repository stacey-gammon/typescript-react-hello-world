# typescript-react-hello-world

Steps to creating a basic Typescript and React hello world app.

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
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outDir": "./dist",
    "sourceMap": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
  }
```

4. Add react

```
yarn add react react-dom
```

4. Add webpack

```
yarn add -D webpack webpack-cli ts-loader
```

5. Run webpack

```
npx webpack
```