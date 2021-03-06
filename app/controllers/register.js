import Ember from 'ember';
// import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend({
  actions: {
    registerUser: function(){
      var user = this.store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password'),
        password_confirmation: this.get('password_confirmation')
      });
      user.save();
      this.transitionToRoute('login');
    }
  }                                                                                                                        });
