import {UploadMixin} from 't17-ember-upload';
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend(UploadMixin, {
    uploadUrl: config.apiUrl+'/upload'
});
