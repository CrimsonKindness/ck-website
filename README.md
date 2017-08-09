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

## Prerequisites 
This guide is for macOS users.

You should use a text editor to make updates to the website. I recommend any the
following:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [TextMate](https://macromates.com/)

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
$ gulp -v 
[19:12:17] CLI version 1.2.2
[19:12:17] Local version 3.9.1
```
[This website](https://travismaynard.com/writing/getting-started-with-gulp)
has a more in-depth tutorial about using Gulp.

Finally, we'll use Ruby (comes installed onmacOS) to install [Sass](http://sass-lang.com/install):
```
$ sudo gem install sass
```

And to verify:
```
$ sass -v
Sass 3.4.23 (Selective Steve)
```

Yay! Now you have everything you need to run the CK website.

## Setup
First, you need to clone this repository:
```
$ git clone --recursive git@github.com:CrimsonKindness/website-hugo.git
```

Now, let's initialize our required node packages. This command reads the 
`package.json` file and installs what we need:
```
$ npm install
```

To make sure this worked, run this command:
```
$ gulp watch
[19:26:32] Using gulpfile ~/website-hugo/gulpfile.js
[19:26:32] Starting 'watch'...
```

Finally, you'll notice a file that says `deploy.sh`. This script makes our 
lives easier by allowing us to update the CK website with just one command.
But first, you have to give it permissions:
```
$ chmod +x deploy.sh
```
Test this by running:
```
$ ./deploy.sh
Deploying updates to GitHub...
Started building sites ...

...

Everything up-to-date
```

If this worked, you're golden. Now let's move on to the easy stuff - updating 
the website!

## Editing the website

If you haven't already, I'd recommend reading Hugo's [Getting Started](https://gohugo.io/getting-started/)
portion of the documentation. It lays out all of the basics nicely. The 
directory structure is a little confusing initially, but it's not bad once 
you get the hang of it.

You'll make edits in primarily two places, the `content` folder and the 
`themes/tusk` folder. **Never make changes in the `public` folder!** 
Everything will break and that will be sad.

#### Text content
Hugo handles text content using Markdown files. [This link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a great
reference for the syntax.

#### Shop page
To make changes to the Shop, you'll have to edit two files:
1. `themes/tusk/layouts/partials/shop/the_filename.html`
2. `themes/tusk/layouts/shop/single.html`

`the_filename.html` is the HTML for the specific shop item (like blue t-shirt, 
spring dues, etc.), and `single.html` is where you add it to the shop page. 
`single.html` also has the JavaScript code to make sure people select a shirt
size when they go to checkout.

Examples are already there. You should be able to just swap out names and images.

#### CSS
To edit CSS, use the file found in `_site/style.scss`. This is a Sass file, 
which makes editing CSS way easier and more organized. Sass is a preprocessor 
for CSS.

To see changes reflected, you have to compile the Sass file whenever you
change it:
```
$ sass _site/style.scss static/css/style.css
```
But, you can use Gulp to do this for you automatically. While Gulp
is running, it will compile the Sass file every time you save `style.scss`:
```
$ gulp watch
```


### Seeing your changes locally
Hugo is great because you don't have to upload changed files every time you 
make a tweak. To see your changes locally, run this command:
```
$ hugo server
```
Then you can visit [http://localhost:1313/](http://localhost:1313/) to see your
local copy of the website.

### Deploying changes
If your local copy looks the way you want it to, you're ready to make your 
changes live! Run this script in the terminal to do that:
```
$ ./deploy.sh
```
That's it! Then go to the website to see if your changes are there. If you 
changed CSS or JavaScript, you may need to clear your cache to see updates. 

If you're curious as to what's happening when you run this script: 
1. First, we run `hugo`. This generates the website and puts it in the `public` folder.
2. Then, we navigate to the `public` folder and stage the changes in git.
3. We commit and push these changes, and then it takes us back to the root project folder.
4. In the root folder, we push our changes to the `website-hugo` repo.

But rather than running 4-5 commands every time, you only have to do 1 :)
