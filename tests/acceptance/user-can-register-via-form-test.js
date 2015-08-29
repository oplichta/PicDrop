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

test('users can register', function(assert) {
  visit('/register');
  fillIn('#email', 'oskar@plichta.com');
  fillIn('#password', 'password1');
  fillIn('#password_confirmation', 'password1');
  click('#signup');

  andThen(function() {
    assert.equal(find('#loginButton').length, 1 , 'The page shows a login button after register');
  });
});

test('user can log in after register new user', function(assert) {
  visit('/register');
  fillIn('#email', 'user@email.com');
  fillIn('#password', 'password1');
  fillIn('#password_confirmation', 'password1');
  click('#signup');

  fillIn('#identification', 'user@email.com');
  fillIn('#password', 'password1');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(find('#logout').length, 1, 'The page shows a login after registration');
  });
});
