# ♟️ chess-explorer

This is a small project for studying and future reference on webpack configuration, where a React project is setup from scratch, without tools like [create-react-app](https://create-react-app.dev). The goal is to create a SPA consuming [chess.com](chess.com) public API to search for chess players in the platform. [countryflags.io](countryflags.io) was also use to render the player national flag. The app currently looks like this:

 <p align="center">
  <img height="500" src="./src/resources/demo.gif">
</p>

What we have here:

 - [Babel](babeljs.io) setup to transpile ES6 and JSX code.

 - Configured [webpack](webpack.js.org) to import `jsx` files as well as `scss` and image files. Webpack will also link to Babel and bundle the whole application to be deployed.

 - Configured `webpack-dev-server` and `react-refresh-webpack-plugin` to improve the development process.

<br/>

## Setting up React dependencies

For creating our React app we'll be using `react` and `react-dom` packages (the app will have only one page, so no use really for `react-router-dom`.

## Setting up Babel

Babel related dependencies are `@babel/core` for Babel base functionalities and `@babel/cli` to enable command line tools. (`-D` or `--save-dev` parameter stands for development only dependency. That is the case because for production we're going to generate a transpiled final version of the code which won't really need Babel.

```
npm install -D @babel/cli @babel/core
```

Then we're also going to install two presets (which basically bundles common Babel plugins, we have a nicer longer explanation about this [here](https://blog.jakoblind.no/babel-preset-env/).

```
npm install -D @babel/preset-env @babel/preset-react
```

Next step is to configure Babel, this can be done by creating a file in the project root directory called `babel.config.js` containing:

```
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react',{
      runtime: 'automatic'
    }]
  ]
};
```

By using the option `runtime: 'automatic'` we don't need to import React in every React component even if it is not being explicitly. This is a new feature for Babel versions 7.9 and above.

## Configuring webpack


### Importing jsx files

### Importing scss files

### Importing images

## webpack dev server

### fast refresh
