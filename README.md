Isomorphic JavaScript Tutorial
===================

This is a small sample app built to demonstrate isomorphic JavaScript concepts.


## Overview

Here we've built the minimum-viable example of an isomorphic JavaScript app: an
app that can run on both client and server. Check out my
[blog post](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
on isomorphic JavaScript for some background.

This is a simple Express "blog" app that lists blog posts. Each page is fully
rendered on the server, however upon subsequent navigation, we use the HTML5
History API, aka `pushState`, to fetch the data for that page from the API and
render the HTML client-side using React.

## Under the hood

We combine a few modules together to build an isomorphic JavaScript app. Each
of these modules was built to support both the client and the server, and by
creating some small shims around them, we can abstract out the differences to
create the same API for both client and server.

We use the following modules on both client and server:

* [React](https://github.com/facebook/react) (UI components)
* [Director](https://github.com/flatiron/director) (routing)
* [Superagent](https://github.com/visionmedia/superagent) (HTTP requests)

On top of a basic [Express](https://github.com/visionmedia/express) app.

We use [Browserify](http://browserify.org/) and [Grunt](http://gruntjs.com/) to
package our server-side CommonJS modules in a way that allows us to use them in
the client-side.

## Getting it running

### Install Node.js >= 0.10.x

If Node.js version 0.10.x is not already installed on your system, install it so you can run this app.

#### Check if it's installed

The command `which node` will return a path to your installed version of Node.js, if it exists on your system.

    $ which node
    /usr/local/bin/node

If it is installed, make sure it's at least version 0.8.x, and preferably 0.10.x.

    $ node --version
    v0.10.33

#### To install

##### Mac

Preferably install using Homebrew:

    $ brew install node

##### Else

Otherwise, go to the [nodejs.org](http://nodejs.org/) and download the binary to install on your system.

### Install `grunt-cli`

This app uses [Grunt](http://gruntjs.com/) to build its assets. To run Grunt, we need to install the `grunt-cli` package globally on your system using NPM.

    $ npm install -g grunt-cli

### Clone this repo onto your machine

    $ cd ~/code
    $ git clone git@github.com:ewendel/isomorphic-tutorial.git
    $ cd isomorphic-tutorial

### Run `npm install` to install dependenices

  $ npm install
  npm http GET https://registry.npmjs.org/superagent
  npm http GET https://registry.npmjs.org/handlebars
  npm http GET https://registry.npmjs.org/director
    ...

### Run the app!

We'll start up our local Node.js web server using Grunt, so it can automatically do useful things for us when we change files like recompile our assets and restart the server.

    $ grunt server

This will start our local web server on port `3030`.

You can view it in your web browser at `http://localhost:3030/`. **You will see that it's nothing there, except a blank page.**

## Adding features

Now that you've got it running, you can start adding some features to get to know the problem space better.

We've got some branches you can check out that show how to add certain features.

### Enable server side rendering

* Goal: have the server render the current page and serve finished HTML to the browser
* Hint: Have a look in app/router/renderer/index.js

### Server side flow

Figure out how the server renders a page, all the way from a request hitting app/routes.js to the finished HTML is sent as the response

### Enable client side rendering

* Goal: have the client render the current page on load. You should see "Rendered on the server" change to "Rendered on the client"
* Hint: Have a look in app/router/renderer/client.js

### Client side flow

Continuing on the server side flow, figure out how the client side JavaScript ends up rendering the page

### Use Marked library to add Markdown to posts

This branch adds the [Marked](https://github.com/chjj/marked) library to allow
formatting of blog post bodies in Markdown, in just a few lines of code.

[solution](https://github.com/ewendel/isomorphic-tutorial/compare/master...ewendel:markdown)

### Create a route for adding posts

Create a page with a form at `/posts/new`, which POSTs to the `/api/posts.json` endpoint.

[solution](https://github.com/ewendel/isomorphic-tutorial/compare/master...ewendel:posts-new)

### Fluxible

Try to make an isomorphic app using [Fluxible](http://fluxible.io/) instead

## License

MIT
