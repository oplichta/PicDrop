import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data).then(function() {
        this.transitionTo('category');
      });
    },
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    facebookLogin: function(){
      var route = this,
          controller = this.controllerFor('login');
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2').then(function(){
        route.transitionTo('dashboard');
      }, function(error){
        controller.set('error', 'Could not sign you in: '+error.message);
      });
    },
    flickrLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'twitter');
      this.transitionTo('category');
      return;
    }
  }
});
