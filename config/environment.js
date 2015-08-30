/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 't17upload',
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {}
  };

ENV.apiUrl = 'https://picdrop2.herokuapp.com:7312/';
  ENV.cordova = {
      // Rebuild the cordova project on file changes. Blocks the server until it's
      // finished.
      rebuildOnChange: false,

      // Run the cordova emulate command after the build is finished
      emulate: false,

      // Which platform to build and/or emulate
      platform: 'android',

      // Which URL the ember server is running on. This is used when using
      // live-reload that comes with the starter kit.
      emberUrl: 'http://localhost:4200',

      liveReload: {
        enabled: false,
        platform: 'android'
      }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist: ['*'],
    store: 'simple-auth-session-store:local-storage',
    routeAfterAuthentication: 'category'
  }
  ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint: ENV.apiUrl + 'users/sign_in'
  };

  ENV['torii'] = {
    sessionServiceName: 'session',
    providers: {
      'facebook-oauth2': {
        apiKey: '1572255896381258',
        redirectUri: 'http://127.0.0.1:3000/users/auth/facebook',
        scope: 'user_photos, user_posts, publish_actions'
      },
      'twitter': {
        requestTokenUri: ENV.apiUrl+'users/auth/flickr'
      },
      'flickr': {
        requestTokenUri: ENV.apiUrl+'users/auth/twitter'
      }
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "http://www.facebook.com/ *",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *",
    'font-src': "'self' http://fonts.gstatic.com https://fonts.gstatic.com/s/materialicons/v7/",
    'connect-src': "'self' *",
    'img-src': "'self' http://localhost:3000 http://localhost:4200/category https://farm8.staticflickr.com/ https://farm9.staticflickr.com/ http://assets.pinterest.com/ ",
    'report-uri':"'localhost'  http://picdrop2.herokuapp.com:3000/",
    'style-src': "'self' 'unsafe-inline' *",
    'media-src': "'self' "
  }
  if (environment === 'development') {
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist: ['*'],
      store: 'simple-auth-session-store:local-storage',
      routeAfterAuthentication: 'category'
    }
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
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist: ['*'],
      routeAfterAuthentication: 'category',
      store: 'simple-auth-session-store:ephemeral'
    }
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist: ['*'],
      store: 'simple-auth-session-store:local-storage',
      routeAfterAuthentication: 'category'
    }
  }

  return ENV;
};
