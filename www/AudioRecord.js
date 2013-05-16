//
//  AudioRecord.js
//
//  Created by Lyle Pratt, September 2011.
//  MIT licensed
//

/**
 * PhoneGap's provided media library does not let you provide settings to the recording process
 * resulting in large, stereo files of a specific, unchangable bitrate and sampling rate. These
 * functions are intended to remedy that.
 * @constructor
 */
 
/**
 * Start recording audio file.
 */

// this should really fire before deviceready, but I can't find the right hook.  Something like "pluginsready":
document.addEventListener("deviceready",function() {

Media.prototype.startRecordWithSettings = function(options) {
    Cordova.exec(null, null, "AudioRecord","startAudioRecord", [this.id, this.src, options]);
};

Media.prototype.stopRecordWithSettings = function() {
    Cordova.exec(null, null, "AudioRecord","stopAudioRecord", [this.id, this.src]);
};
},false);