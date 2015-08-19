import DS from 'ember-data';

export default DS.Model.extend({
  authorize_url: DS.attr('string'),
  oauth_token: DS.attr('string'),
  oauth_token_secret: DS.attr('string')
});
