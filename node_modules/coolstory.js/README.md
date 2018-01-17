[![Try coolstory.js on RunKit](https://badge.runkitcdn.com/coolstory.js.svg)](https://npm.runkit.com/coolstory.js)

# coolstory.js
Generate a random story title! Produces masterpieces such as:

*   The Breezy Winter
*   Between the Worst Souls
*   Entrusted by Azure Kings
*   The Star Box
*   Authority's Worst Bones
*   His Skulls
*   Old Spider Hand
*   The Shade Beans
*   How It Is
*   Smile

This module was originally built as part of [RPNow.net](https://github.com/rpnow/rpnow2), but
is now available for any project to use under the [MIT license](/LICENSE).

## Try it out!
You can try out coolstory.js in your browser at [npm.runkit.com/coolstory.js](https://npm.runkit.com/coolstory.js).


## Basic Usage
coolstory.js works in Node and in a browser.

### Browser

``` html
<script src="https://unpkg.com/coolstory.js"></script>
<script>
    var amazingTitle = coolstory.title(); // "Doubting"
</script>
```

### Node

After installing it using npm: `npm install coolstory.js`

``` js
const coolstory = require('coolstory.js');
let reallyGoodTitle = coolstory.title(); // "It Was the Bat"
```

### Bower

``` bash
bower install --save coolstory.js
```

Include the file `coolstory.js` in your project.

## API

### coolstory.title()
Generate a story title.

``` js
coolstory.title();
```

### coolstory.title(maxLength)
Generate a story title whose length is less than or equal to `maxLength` characters. (including spaces)

``` js
coolstory.title(10);
```
