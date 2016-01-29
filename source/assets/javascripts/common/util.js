/**
 * Mix - mixes options into function
 * @param {json} options - Willy-nilly options you wanna have
 * @param {object} object - Object to mix willy-nilly options in
 */

function mix(options, object) {
  options = options || {};

  // mix options into the object
  for (var key in options) {
    object[key] = options[key];
  }
}
