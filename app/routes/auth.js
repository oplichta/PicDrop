import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
        get_url: function(){
          this.store.find('auth');
        }
    }
});
