# Crimson Kindness
Managing the Crimson Kindness website using [Hugo](https://gohugo.io), a static 
website generator and manager.

## Overview 
A basic understanding of HTML, CSS, and Markdown is necessary to manage this
website. JavaScript is a plus, but the necessary code snippets are already
implemented and don't need a lot of modification.

A basic understanding of the terminal will also be necessary.

Hugo's [Quick Start guide](https://gohugo.io/getting-started/quick-start/) is a
good place to start for learning the basics of Hugo.

**Initial setup is a little time consuming, but once you're set up, editing
the CK website will be very fast!**

## Setup 
This guide is for macOS users.

To set up the project on your computer, you need the following tools installed:

- Git
- Hugo
- Node
- Sass
- Gulp

We'll use [Homebrew](https://brew.sh/) to help us install Git, Hugo, and Node. Installation instructions can be found on the Homebrew website.

After installing Homebrew, we can install the first three tools using the 
following commands in the terminal:

```
$ brew install git
$ brew install hugo
$ brew install node
```

Now let's check to see if everything installed correctly:
```
$ git --version
git version 2.14.0

$ hugo version
Hugo Static Site Generator v0.18 BuildDate: 2016-12-19T12:43:00-08:00

$ node -v
v7.9.0

$ npm -v
4.2.0
```

The numbers may be different, but you should see something similar. Now,
we'll use NPM (node) to install [Gulp]():

```
$ npm install gulp-cli -g 
```

If that doesn't work, try `sudo`-ing it:
```
$ sudo npm install gulp-cli -g 
```

To make sure everything went well:
```
$ 
```
[This website](https://travismaynard.com/writing/getting-started-with-gulp)
has a more in-depth tutorial about using Gulp.

Finally, we'll use Ruby (comes installed onmacOS) to install [Sass](http://sass-lang.com/install):
```
sudo gem install sass
```
