# Scaffolding

Minimum setup to run typescript. 

## Steps

Install typescript.

``` 
npm install -g typescript
```

Init npm project in the current working directory.

```
npm init
npm install --save-dev typescript tslint @types/node
```

Create tsconfig.json.

Create tslint.json file.

```
./node_modules/.bin/tslint --init
```

Create index.ts.

Compile and run.

```
./node_modules/.bin/tsc
node /.dist/index.js
```

Tips, use watch to continuously compile and watch.
