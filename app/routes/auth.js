import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
        get_url: function(){
          this.store.find('auth');
        }
        // auth: function(authorize_url) {
        //   this.store.find('auth',{auth_url: authorize_url});
        // }
    }
});
