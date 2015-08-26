import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 't17upload/tests/helpers/start-app';

module('Acceptance | authorization test', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('users can log in', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('a:contains("Login")').length, 1, 'The page shows a login link when the session is not authenticated');
  });

  visit('/login');
  fillIn('#identification', 'oskar@plichta.com');
  fillIn('#password', 'password1');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(find('#logout').length, 1, 'The page shows a logout link when the session is authenticated');
  });
});

test('a protected route is accessible when the session is authenticated', function(assert) {
  authenticateSession();
  visit('/protected');

  andThen(function() {
    assert.equal(currentRouteName(), 'protected');
  });
});

test('a protected route is not accessible when the session is not authenticated', function(assert) {
  invalidateSession();
  visit('/category');

  andThen(function() {
    assert.notEqual(currentRouteName(), 'protected');
  });
});

test('users can logout', function(assert) {
  authenticateSession();
  visit('/');
  click('#logout');
  andThen(function() {
    assert.equal(find('a:contains("Login")').length, 1, 'The page shows a login link when the users logout and session is unauthenticated');
  });
});
