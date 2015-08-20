/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 't17upload',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {}
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist: ['*'],
    store: 'simple-auth-session-store:local-storage'
  }
  ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
  };

  ENV['torii'] = {
    sessionServiceName: 'session',
    providers: {
      'facebook-oauth2': {
        apiKey: '1572255896381258',
        redirectUri: 'http://127.0.0.1:3000/auth/facebook',
        // scope: 'user_photos, user_posts, publish_actions'
      },
      'flickr': {
        requestTokenUri: 'http://127.0.0.1:3000/auth/flickr'
      },
      'twitter': {
        requestTokenUri: 'http://127.0.0.1:3000/auth/flickr'
      }
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "http://www.facebook.com/",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
    'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://localhost:3000/ http://localhost:3000/photos http://localhost:3000/tw_upload http://127.0.0.1:3000 http://localhost:3000/users/sign_in ",
    'img-src': "'self' http://localhost:3000 http://localhost:4200/category https://farm8.staticflickr.com/ https://farm9.staticflickr.com/ http://assets.pinterest.com/",
    'report-uri':"'localhost'",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  }
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
