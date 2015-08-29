/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  });

  app.import('vendor/t17-ember-upload.js', {
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

  return app.toTree();
};
