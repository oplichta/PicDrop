import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 't17upload/tests/helpers/start-app';

module('Acceptance | user can login via form', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
