PocketSmith Node API
====================

[![NPM version](https://img.shields.io/npm/v/pocketsmith.svg?style=flat-square)](https://www.npmjs.com/package/pocketsmith)
[![Travis](https://img.shields.io/travis/maraisr/pocketsmith.svg?style=flat-square)](https://travis-ci.org/maraisr/pocketsmith)
[![Codecov](https://img.shields.io/codecov/c/github/maraisr/pocketsmith.svg?style=flat-square)](https://codecov.io/github/maraisr/pocketsmith)

> Work In Progress

### Installation

```sh
npm i pocketsmith
```

## Usage

```js
var PocketSmith = require('pocketsmith');

var Smith = new PocketSmith('my-token'); // Obtain a token via https://developers.pocketsmith.com/

// Scoped to the `me` endpoint
Smith.init().then(function(User) {
	User.Accounts.getAll(function(Accounts) { ... });
});

// -- or --

Smith.Accounts.getAllByUser(1, function(Accounts) { ... });

// List of api endpoints coming soon...
```
