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

I unified the build, starting from the Node.js library and then building the browser library with Webpack.

Proper linting solves a lot of issues, and [`xo`](https://github.com/sindresorhus/xo) is a nice tool that does most of the work. It has an Atom plugin and can enforce [`eslint`](https://eslint.org) rules as well. Plenty of improvements have been made to the language since *ES6*.

Unit tests matter just as much. I used [`ava`](https://github.com/avajs/ava) and its [Atom plugin](https://github.com/avajs/atom-ava) to write basic type-checking tests first, then gradually added more functional ones.

## Packaging for NPM

The keys to success are:
- Writing a clean README file
- Using a logo and badges to signal that the library is actively maintained

## Refactoring for good

Once this safety net is in place, the refactoring itself is easy:
- Splitting the files into classes
- Cleaning up code smells (`for` loops, linting errors)
- Moving to a functional style, which makes the code easier to read and to maintain

Now the library can evolve and use ES6 syntactic sugar; spread operators and generators are particularly useful here. If you want to contribute please go to the [GitHub repo](https://github.com/galaxykate/tracery)
