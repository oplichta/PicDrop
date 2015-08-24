import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("category", { path: "/category" });
  this.route('login');
  this.route('logout');
  this.route('register');
});

export default Router;
