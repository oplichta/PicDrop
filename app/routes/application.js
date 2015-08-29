import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import config from '../config/environment';

export default Ember.Route.extend({
  ApplicationRouteMixin,
    actions: {
    mobileMenu: function() {
        Ember.$(".button-collapse").sideNav();
    },
    invalidateSession: function() {
      this.get('session').invalidate();
      Ember.$.get(config.apiUrl+'/users/sign_out/');
    },
    facebookLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2');
      this.transitionTo('category');
      return;
    },
    signInViaTwitter: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'twitter');
      this.transitionTo('category');
      return;
    },
    flickrLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'flickr');
      this.transitionTo('category');
      return;
    }
  }
});
