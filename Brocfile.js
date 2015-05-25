/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  sassOptions: {
    includePaths: ['bower_components/materialize/sass']
  }
});
// app.import('bower_components/jquery/dist/jquery.min.js');
// app.import('bower_components/jquery-ui/jquery-ui.min.js');

app.import('bower_components/t17-ember-upload/dist/t17-ember-upload.js', {
  exports: {
     't17-ember-upload': [
       'default',
       'UploadInputView',
       'DropzoneView',
       'FileObject',
       'UploadMixin'
     ]
  }
});

// app.import('bower_components/t17-ember-upload/dist/t17-ember-upload.min.css');

module.exports = app.toTree();
