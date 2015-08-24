import Ember from 'ember';

export default Ember.Object.extend({
  //   open: function(authentication){
  //   var authorizationCode = authentication.authorizationCode;
  //   return new Ember.RSVP.Promise(function(resolve, reject){
  //     Ember.$.ajax({
  //       url: 'api/session',
  //       data: { 'facebook-auth-code': authorizationCode },
  //       dataType: 'json',
  //       success: Ember.run.bind(null, resolve),
  //       error: Ember.run.bind(null, reject)
  //     });
  //   }).then(function(user){
  //     // The returned object is merged onto the session (basically). Here
  //     // you may also want to persist the new session with cookies or via
  //     // localStorage.
  //     return {
  //       currentUser: user
  //     };
  //   });
  // }
// ,
//   fetch: function() {
//     // if (!localStorage.token) {
//     //   return rejectPromise();
//     // }
//
//     var adapter = this.container.lookup('adapter:application');
//     adapter.set('headers', { 'Authorization': localStorage.token });
//
//     return this.get('store').find('user', 'me').then(function(user) {
//       return {
//         currentUser: user
//       };
//     });
//   },
//   close: function() {
//   var authToken = localStorage.token;
//
//   localStorage.token = null;
//   var adapter = this.container.lookup('adapter:application');
//   adapter.set('headers', { 'Authorization': authToken });
//
//   return new Ember.RSVP.Promise(function(resolve, reject) {
//     Ember.$.ajax({
//       url: '/logout',
//       headers: {
//         'Authorization': authToken
//       },
//       type: 'POST',
//       success: Ember.run.bind(null, resolve),
//       error: Ember.run.bind(null, reject)
//     });
//   });
// }
});
