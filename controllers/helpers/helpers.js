/**
 *
 *
 *
 */
const
  path  = require('path');


/**
 *
 *
 *
 */
const view = (res, name, params) => {
  res
    .cookie('params', params, {maxAge : 999999999})
    .sendFile(path.join(__dirname + '/../../views/' + name.replace(".", "/") + '.html'));
}


/**
 *
 *
 *
 */
const public = (res, type, folder, file) => {
  res.sendFile(path.join(__dirname + '/../../public/' + type + "/" + folder + "/" + file));
}


/**
 *
 *
 *
 */
module.exports = {
  view,
  public,
}
