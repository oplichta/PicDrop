import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
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
