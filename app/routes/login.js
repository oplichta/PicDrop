import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data);
    },
    toCategory: function() {
      this.transitionTo('category');
    },
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    facebookLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2');
      this.transitionTo('category');
      return;
    },
    flickrLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'twitter');
      this.transitionTo('category');
      return;
    }
  }
});
