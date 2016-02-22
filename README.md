# ionic-sass

[Ionic's CSS Framework](http://ionicframework.com/docs/components/) in SASS and bundled for Meteor 1.2+. Currently up to date with ionic version `v1.2.4`.

## Installation

```
meteor add fourseven:scss@3.4.0-beta1
meteor add seba:ionic-sass
```

Then in your app's `.scss` file:

```
@import '{seba:ionic-sass}/scss/ionic';
```

## Customization

Importing the source SASS files as opposed to including compiled or CDN versions allows you to easily customize or theme your app using SASS variables.

**_app-variables.scss**

```
// Change Ionic's `positive` color to Meteor's red color:
$positive: #DE4F4F;
```

**app.scss**

```
// Import your custom variables
@import 'app-variables';

// Then import ionic after. Ionic will use your variables instead of it's own.
@import '{seba:ionic-sass}/scss/ionic';
```

## Docs

See the official [Ionic CSS Docs](http://ionicframework.com/docs/components/) site for usage instructions.

## License
[MIT License](https://github.com/sebakerckhof/meteor-ionic-sass/blob/master/LICENSE)
