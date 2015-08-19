import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
  ApplicationRouteMixin,
  actions: {
    // logout: function() {
    //   this.get('session').close();
    // },
    beforeModel: function() {
     return this.get('session').fetch().then(function() {
       console.log('session fetched');
     }, function() {
       console.log('no session to fetch');
     });
   }
  }

  // ,
  // actions: {
  //   back: function() {
  //     history.back();
  //   },
  //
  //   openLink: function(url) {
  //     window.open(url, '_system');
  //   }
  // }
});
