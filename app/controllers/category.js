import {UploadMixin} from 't17-ember-upload';
import Ember from 'ember';

export default Ember.ArrayController.extend(UploadMixin, {
    uploadUrl: 'http://localhost:3000/upload_fb'
    // ,
    // totalFileSize: function() {
    //     var total = 0;
    //     this.get('files').forEach(function(file) {
    //         total += file.get('size');
    //     });
    //     mbTotal = (total/1024)/1024;
    //     return mbTotal.toFixed(2);
    //   },
    // on('drop', function(evt) {
    //     removeDropzone();
    //     $('.dropzonee').hide();
    //     if (dragDropEventHasFiles(evt)) {
    //         self.get('controller').send('filesDropped', evt.dataTransfer.files);
    //         return false;
    //     }
});
