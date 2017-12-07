---
title: Refactoring a library in ES6
date: 2017-12-06 16:00:00
tags:
- es6
categories:
- programming
- es6
---

Some technical notes while refactoring a library in ES6.

I recently worked on a refactoring of [Tracery](https://github.com/galaxykate/tracery) and [corresponding NPM package](https://github.com/v21/tracery) into this [NPM package](https://npmjs.com/package/epures) and [browser library](https://cdn.jsdelivr.net/npm/epures/dist/epures.min.js).

## Initial build issues

The library had two repositories to maintain the same code.

I unified the build starting from the Node.js library and then build the browser library using Webpack.

Proper linting can solves lots of issues, [`xo`](https://github.com/sindresorhus/xo) is a nice tool that does most of the job. It has an atom plugin and can implement [`eslint`](https://eslint.org) rules as well. Lots of improvements to the language have been made since *ES6*.

Unit tests are important, I used [`ava`](https://github.com/avajs/ava) and [atom plugin](https://github.com/avajs/atom-ava) to write basic typing verification tests first then gradually added more functional tests.

## Packaging for NPM

Keys to success are:
- Writing a clean README file
- Use logo and badges to communicate to users that the library is actively maintained

## Refactoring for good

Once this security net is set up, all the refactoring tasks are easy:
- Splitting up the files into classes.
- Cleaning bad smells (for loops, linting errors)
- Functional style programming make the code easier to read and maintainable in the future.

Now the library can evolve and use ES6 sugar syntax, spread operators and generators are interesting for the matter. If you want to contribute please go to the [GitHub repo](https://github.com/galaxykate/tracery)
