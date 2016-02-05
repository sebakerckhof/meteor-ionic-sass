Package.describe({
  name: 'seba:ionic-sass',
  summary: "Ionic's CSS Framework in SASS and bundled for Meteor.",
  version: '1.2.4',
  git: 'https://github.com/sebakerckhof/meteor-ionic-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use("fourseven:scss@3.4.1", ["client"]);
  api.imply("fourseven:scss", ["client"]);

  api.addFiles([
    //ionic
    'scss/_action-sheet.scss',
    'scss/_animations.scss',
    'scss/_backdrop.scss',
    'scss/_badge.scss',
    'scss/_bar.scss',
    'scss/_button.scss',
    'scss/_button-bar.scss',
    'scss/_checkbox.scss',
    'scss/_form.scss',
    'scss/_grid.scss',
    'scss/_items.scss',
    'scss/_list.scss',
    'scss/_loading.scss',
    'scss/_menu.scss',
    'scss/_mixins.scss',
    'scss/_modal.scss',
    'scss/_platform.scss',
    'scss/_popover.scss',
    'scss/_popup.scss',
    'scss/_progress.scss',
    'scss/_radio.scss',
    'scss/_range.scss',
    'scss/_refresher.scss',
    'scss/_reset.scss',
    'scss/_scaffolding.scss',
    'scss/_select.scss',
    'scss/_slide-box.scss',
    'scss/_spinner.scss',
    'scss/_tabs.scss',
    'scss/_toggle.scss',
    'scss/_transitions.scss',
    'scss/_type.scss',
    'scss/_util.scss',
    'scss/_variables.scss',
    'scss/ionic.scss',

    //ionicons
    'scss/ionicons/_ionicons-font.scss',
    'scss/ionicons/_ionicons-icons.scss',
    'scss/ionicons/_ionicons-variables.scss',
    'scss/ionicons/ionicons.scss'
  ], 'client', {isImport:true});

});
