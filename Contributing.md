# Contributing to the Style Guide

## Steps to Contribute

### 1. Fork the repository

 1. [Create a Github account](https://github.com/join/) if you don't have one.
 1. [Fork this repository](https://github.com/WPWale/wp-hindi-translation-style-guide/fork) into your own account.

### 2. Create an Issue

 1. For any change you plan to make, preferably [create a new issue](https://github.com/WPWale/wp-hindi-translation-style-guide/issues/new).
 1. Describe the changes you'd like to make, so that other contributors can discuss them. This could save you a lot of time spent on work that might be rejected without such pre-discussion.
 1. It'd be nice to wait to get assigned to the issue and then proceeding.
 1. If you are absolutely sure of what you're doing, you can skip to the next step but it may not work out at times.

### 3. Make changes

 1. **Do not** make changes to the actual guide in the `dist` folder.
 1. **Do not** make changes to the index file (`source/index.md`). This file contains the title of the guide and a placeholder (`<!-- toc -->`) that is replaced with a Table of Contents (TOC) during the build process.
 1. The guide is built automatically by joining the partials (containing individual sections) in a gulp task.
 1. **Make changes to the individual sections in the `source` folder only**.
 1. **Do not** run the build process unless discussed previously and **do not** send PRs containing changes to `dist/guide.md`.

### 4. Send a Pull Request

 1. Once your changes are ready, send a [Pull Request (PR)](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) describing the changes.
 1. You can skip the description, if you've already created an issue and discussions have already taken place.
 1. Reference the issue number in one of the commits or in the PR using a hash (#) followed by the issue number.
 1. Send the PR only to the `draft` branch, **not** the `master` branch.

## Build Process

Even though it's been said already, do not use the build process described here when sending PRs unless it's been discussed before. This is here for the sake of completeness and in case you'd like to preview the full guide with your changes incorporated.

 1. Make sure you have [NodeJS](https://nodejs.org/en/download/package-manager/) and [npm](https://www.npmjs.com/get-npm) installed on your system.
 1. Install dependencies by running `npm install` inside the repository folder.
 1. Once all dependencies are installed, run `gulp build`.

This will run the [build task](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/Gulpfile.js#L5-L19) here. It will do two things:
 1. Concat (combine) all the partials (`source/*.md`) into a single guide based on the order defined within the task.
 1. Use the headings to generate a TOC by replacing the placeholder in `source/index.md`.