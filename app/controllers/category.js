import {UploadMixin} from 't17-ember-upload';
import Ember from 'ember';

export default Ember.ArrayController.extend(UploadMixin, {
    uploadUrl: 'http://localhost:3000/upload'
});
